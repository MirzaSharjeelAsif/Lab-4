// src/components/PostForm.jsx
import React from "react";

const PostForm = ({ newPost, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="post-form">
      <h2>Post Form</h2>

      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Body:</label>
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={onChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
