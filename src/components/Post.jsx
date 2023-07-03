import { useState } from "react";
import Comments from "./Comments";
import { faker } from "@faker-js/faker";

function Post({ postData }) {
  const [showComments, setShowComments] = useState(false);
  const randomAvatar = faker.image.avatar();
  return (
    <div className="post">
      <div className="post-info">
        <div className="post-user-details">
          <div className="user-photo">
            <img src={randomAvatar} alt="" />
          </div>
          <div className="post-author">{postData.author}</div>
        </div>
        <div className="post-title">{postData.title}</div>
        <div className="post-content">{postData.content}</div>
        {postData.img && (
          <img className="post-image" src={postData.img} alt="" />
        )}
      </div>
      <button
        className="comments-button"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <div className="comments-container">
          <Comments postId={postData.id} />
        </div>
      )}
    </div>
  );
}

export default Post;
// every post has an id and its own comments (line 13)
