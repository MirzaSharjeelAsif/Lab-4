// src/components/FakeApiApp.jsx
import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

const FakeApiApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(API_URL);
      const posts = await response.json();
      setData(posts.reverse());
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.body) {
      const post = { ...newPost, id: Date.now() };
      setData([post, ...data]);
      setNewPost({ title: "", body: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  return (
    <div className="app-container">
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
      />
      {loading ? <p>Loading...</p> : <PostsContainer data={data} />}
    </div>
  );
};

export default FakeApiApp;
