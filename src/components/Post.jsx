import { useState } from "react";
import Comments from "./Comments";

function Post({ postData }) {
  //state for button of add comment
  const [showComments, setShowComments] = useState(false);
//showing post component and add comment for it and use props to share the post id to the comments
  return (
    <div className="post">
      <div className="post-info">
        <div className="post-user-details">
          <div className="user-photo">
            <img src={postData.postImg} alt="" />
          </div>
          <div>
            <div className="post-author">{postData.author}</div>
            <div className="post-time">{postData.postTime}</div>
          </div>
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
