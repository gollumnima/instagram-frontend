import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPostNumber } from "store/post";

const UploadTemplate = props => {
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const handleChange = e => {
    setContent(e.target.value);
  };

  const [imageURL, setImageURL] = useState("");

  const handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("file", file);
    instaAPI
      .post(`/api/posts/${postID}/image`, fd, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(({ data }) => {
        dispatch(getPostNumber(data.post_id));
        setImageURL(data.url);
      });
  };

  const [postID, setPostID] = useState(null);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    handleTempPost();
    instaAPI.get(`/api/posts`).then(({ data }) => {
      userList.concat(data.rows);
    });
  }, []);

  const handleSubmit = () => {
    instaAPI.put(`/api/posts/${postID}`, { content, status: "PUBLISHED" });
  };

  const handleTempPost = () => {
    instaAPI.post(`/api/posts`, { content: "" }).then(({ data }) => {
      setPostID(data.id);
    });
  };

  return (
    <div className="ut-container">
      <div className="ut-wrapper">
        <input type="file" onChange={e => handleFileChange(e)} />
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
