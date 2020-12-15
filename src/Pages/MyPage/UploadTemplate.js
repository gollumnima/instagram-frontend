import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "utils/config";
import authHeader from "services/auth-header";
import { instaAPI } from "utils/axios.wrapper";

const UploadTemplate = () => {
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
        setImageURL(data.url);
      });
  };

  const [postID, setPostID] = useState(null);

  useEffect(() => {
    handleTempPost();
  }, []);

  const handleSubmit = () => {
    instaAPI.put(`/api/posts/${postID}`, { content, status: "PUBLISHED" });
  };

  const handleTempPost = () => {
    instaAPI.post(`/api/posts/`, { content: "" }).then(({ data }) => {
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
