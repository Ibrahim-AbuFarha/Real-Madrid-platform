import axios from "axios";
import { useState } from "react";
function CreatePost({ onCreate }) {
  const [postDetails, setPostDetails] = useState({
    title: "",
    author: "",
    content: "",
    img: "",
    time: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/posts", postDetails)
      .then(({ data: newPost }) => {
        setPostDetails({
          title: "",
          author: "",
          content: "",
          time: "",
        });
        onCreate(newPost);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="create-post">
      <form>
        <input
          className="input"
          placeholder="Title"
          required
          onChange={(e) =>
            setPostDetails({ ...postDetails, title: e.target.value })
          }
          value={postDetails.title}
        />
        <input
          className="input"
          placeholder="Author"
          required
          onChange={(e) =>
            setPostDetails({ ...postDetails, author: e.target.value })
          }
          value={postDetails.author}
        />
        <input
          className="input"
          placeholder="Image Link"
          required
          onChange={(e) =>
            setPostDetails({ ...postDetails, img: e.target.value })
          }
          value={postDetails.img}
        />
        <textarea
          className="textarea"
          placeholder="Add your thoughts"
          required
          onChange={(e) =>
            setPostDetails({ ...postDetails, content: e.target.value })
          }
          value={postDetails.content}
        />
        <button
          className="post-button"
          onClick={handleSubmit}
          disabled={
            !postDetails.title || !postDetails.author || !postDetails.content
          }
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
