import axios from "axios";
import React, { useState } from "react";

function CreateComment({ postId, onCreate }) {
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const commentTime = new Date().toLocaleTimeString();
    axios
      .post("http://localhost:3005/comments", {
        commentAuthor,
        commentContent,
        postId,
        commentTime,
      })
      .then(({ data: newComment }) => {
        setCommentAuthor("");
        setCommentContent("");
        onCreate(newComment);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="create-comment-form">
      <input
        className="input"
        placeholder="Author"
        value={commentAuthor}
        onChange={(e) => setCommentAuthor(e.target.value)}
      />
      <input
        className="input"
        placeholder="Comment"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
      {commentAuthor && commentContent && (
        <button className="comment-button" onClick={handleClick}>
          Add Comment
        </button>
      )}
    </form>
  );
}

export default CreateComment;
