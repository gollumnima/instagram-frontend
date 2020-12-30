import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPost } from "store/post";

const UploadTemplate = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector(state => state?.post?.post);
  const [postID, setPostID] = useState(null);
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleFileChange = async ev => {
    ev.preventDefault();
    const [file] = ev.target.files;
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await instaAPI.post(
      `/api/posts/${postID}/image`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data"
        }
      }
    );
    setImageURL(data.url);
  };

  const handleTempPost = async () => {
    const { data } = await instaAPI.post(`/api/posts`);
    setPostID(data.id);
    dispatch(getPost(data.id));
    console.log(data, "data in upload");
  };

  useEffect(() => {
    handleTempPost();
  }, []);

  const handleSubmit = async () => {
    await instaAPI.put(`/api/posts/${postID}`, {
      content,
      status: "PUBLISHED"
    });
    history.push(`/p/${postID}`);
  };

  console.log(post, "post in template");
  return (
    <div className="ut-container">
      <div className="ut-wrapper">
        <input type="file" onChange={ev => handleFileChange(ev)} />
        {imageURL && (
          <div
            className="ut-img-preview"
            style={{ backgroundImage: `url(${imageURL})` }}
          />
        )}
        <textarea
          className="ut-input-area"
          placeholder="문구 입력..."
          value={content}
          onChange={e => handleChange(e)}
        />
        {imageURL && (
          <button onClick={() => handleSubmit()}>업로드 버튼</button>
        )}
      </div>
    </div>
  );
};
export default UploadTemplate;
