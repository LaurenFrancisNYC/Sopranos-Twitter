import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;
  const { id } = useParams();
  const { posts, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postCard = posts.find(post => post.id === Number(id));
      setFormData({
        content: postCard.content
      })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <label>
        Edit Post:
        <textarea
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}