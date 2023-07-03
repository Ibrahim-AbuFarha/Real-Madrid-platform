import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import CreatePost from "./CreatePost";
function Posts() {
  const [posts, setPosts] = useState([]);
  const handleCreatePost = (newPost) => {
    setPosts([...posts, { ...newPost }]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3005/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="posts-container">
      <CreatePost onCreate={handleCreatePost} />
      {posts.map((postData) => (
        <Post postData={postData} key={postData.id} />
      ))}
    </div>
  );
}

export default Posts;
