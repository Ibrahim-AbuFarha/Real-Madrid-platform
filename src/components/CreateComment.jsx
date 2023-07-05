import axios from "axios";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";
function CreateComment({ postId, onCreate }) {
  const randomAvatar = faker.image.avatar();
  //
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");
  //
  const handleClick = (e) => {
    e.preventDefault();
    const commentTime = moment().calendar();
    const commentImg = randomAvatar;
    //request for the comments for the json server
    axios
      .post("http://localhost:3005/comments", {
        commentAuthor,
        commentContent,
        postId,
        commentTime,
        commentImg,
      })
      .then(({ data: newComment }) => {
        //reset comment
        setCommentAuthor("");
        setCommentContent("");
        //
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
