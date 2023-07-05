import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import CreatePost from "./CreatePost";
function Posts() {
  const [posts, setPosts] = useState([]);

  //create post  then update the state (after create the form )
  const handleCreatePost = (newPost) => {
    //add new post to the array of posts
    setPosts([...posts, { ...newPost }]);
  };
  //useEffect will just read one time and function of it will be on the memory and its invoked in the renders
  useEffect(() => {
    // request to get the data from json server to show the posts in the screen 
    axios
      .get("http://localhost:3005/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //mapping to show every post on the screen
  //postDate is each object in the posts (post)
  
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
