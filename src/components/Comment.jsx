import axios from "axios";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { GoXCircleFill, GoPencil } from "react-icons/go";

function Comment({ comment, onDeleteComment, onEditComment }) {
  const randomAvatar = faker.image.avatar();
  const [editComment, setEditComment] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const handleDeleteComment = () => {
    axios
      .delete(`http://localhost:3005/comments/${comment.id}`)
      .then(() => onDeleteComment(comment.id));
  };

  const handelSubmitEdit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3005/comments/${comment.id}`, {
        commentContent: editComment,
      })
      .then(() => {
        onEditComment(editComment, comment.id);
        setIsEdit(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="comment">
      <div className="user-comment-info">
        <img className="comment-user-photo" src={randomAvatar} />
        <div>
          <div className="comment-author">{comment.commentAuthor}</div>
          <div className="comment-content">{comment.commentContent}</div>
          <div className="comment-time">{comment.commentTime}</div>
        </div>
      </div>
      <div className="comment-buttons">
        <button className="delete-button" onClick={handleDeleteComment}>
          <GoXCircleFill />
        </button>
        <button className="edit-button" onClick={() => setIsEdit(!isEdit)}>
          <GoPencil />
        </button>
      </div>
      {isEdit && (
        <form className="edit-comment-form" onSubmit={handelSubmitEdit}>
          <input
            placeholder="Edit your comment"
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          />
          {editComment && <button disabled={!editComment}>Submit</button>}
        </form>
      )}
    </div>
  );
}

export default Comment;
