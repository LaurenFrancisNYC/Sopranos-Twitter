import { useState } from 'react'

export default function PostCreate(props) {
  const { handleCreate, characters } = props;

  const [formData, setFormData] = useState({
    content: '',
    character_id: ''
  })

  const { content, character_id } = formData;
  
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
      handleCreate(formData, character_id);
    }}>

      <h3>Create Post</h3>

      <label>
        Content:
        <textarea
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>

      <select onChange={handleChange} defaultValue='default' name={"character_id"} >
          <option value='default' disabled>-- Select a character --</option>
        {characters.map(character => (
          <option value={character.id} key={character.id}>{character.name}</option>
          ))}
      </select>
      
      <button>Submit</button>
    </form>
  )
}
