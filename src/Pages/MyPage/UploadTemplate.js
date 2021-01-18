import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPost } from "store/post";
import "./upload.scss";

const UploadTemplate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //const username = useSelector(state => state?.user?.userInfo?.username);

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
  };

  useEffect(() => {
    handleTempPost();
  }, []);

  const handleSubmit = async () => {
    await instaAPI.put(`/api/posts/${postID}`, {
      content,
      status: "PUBLISHED"
    });
    history.push(`/`);
  };

  return (
    <div className="upload__container">
      <div className="upload__wrapper">
        <input type="file" onChange={ev => handleFileChange(ev)} />
        {imageURL && (
          <div
            className="upload__img__preview"
            style={{ backgroundImage: `url(${imageURL})` }}
          />
        )}
        <textarea
          className="upload__input"
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
