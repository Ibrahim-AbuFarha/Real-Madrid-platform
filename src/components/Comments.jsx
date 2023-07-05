import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  //create comment
  const handelCreateComment = (newComment) => {
    setComments([...comments, { ...newComment }]);
  };
  //delete comment
  const handelDeleteComment = (id) => {
    const UpdatedComment = comments.filter((comment) => {
      return comment.id !== id;
    });
    setComments(UpdatedComment);
  };
  //edit comment
  const handelEditComment = (EditComment, id) => {
    const UpdatedComment = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, commentContent: EditComment };
      }
      return comment;
    });
    setComments(UpdatedComment);
  };
  //
  useEffect(() => {
    axios
      .get(`http://localhost:3005/comments?postId=${postId}`)
      .then(({ data }) => {
        setComments(data);
      });
  }, []);
  //
  return (
    <div className="comments-container">
      <CreateComment postId={postId} onCreate={handelCreateComment} />
      <div className="comment-list">
        {comments.map((comment) => (
          <Comment
            comment={comment}
            onDeleteComment={handelDeleteComment}
            onEditComment={handelEditComment}
            key={comment.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
