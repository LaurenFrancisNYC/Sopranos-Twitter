import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PostCreate.css";

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { id } = useParams();
  const { posts, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postCard = posts.find((post) => post.id === Number(id));
      setFormData({
        content: postCard.content,
      });
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="post-creation-container">
      <form
        className="post-creation"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <label>
          <textarea
            maxLength="180"
            className="text-field"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
