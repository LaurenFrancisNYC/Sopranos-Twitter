import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login(props) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const { name, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='signup-container'>
    <form className='signup-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <label>
        Username:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
        <br />
        <div>
      <Link to="/register">
        <button className="submit-button">Register</button>
      </Link>
          <button className="submit-button">Submit</button>
          </div>
      </form>
      </div>
  );
}
