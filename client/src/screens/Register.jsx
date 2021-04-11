import { useState } from "react";
import "./Register.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signup-container">
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <label>
          Username:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
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
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
