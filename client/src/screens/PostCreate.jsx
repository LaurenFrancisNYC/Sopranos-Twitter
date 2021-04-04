import { useState } from "react";
import "./PostCreate.css";


export default function PostCreate(props) {
  const { handleCreate, characters } = props;

  const [formData, setFormData] = useState({
    content: "",
    character_id: "",
  });

  const { content, character_id } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='post-creation-container'>
    <div >
    <form className='post-creation'
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData, character_id);
      }}
    >
        <textarea maxlength="180" placeholder="Max length - 180 characters." className="text-field" name="content" value={content} onChange={handleChange} />
<div>
      <select
        onChange={handleChange}
        defaultValue="default"
        name={"character_id"}
      >
        <option value="default" disabled>
          -- Select a character --
        </option>
        {characters.map((character) => (
          <option value={character.id} key={character.id}>
            {character.name}
          </option>
        ))}
      </select>

            <button className='submit-button'>Submit</button>
            </div>
      </form>
      </div>
    </div>
  );
}
