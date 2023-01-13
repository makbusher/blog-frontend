import axios from "axios";
import { useState } from 'react';

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users.json", params).then(response => {
      console.log(response.data);
      event.target.reset();
    })
      .catch(error => {
        console.log("in the catch!!!");
        console.log(error.response.data.errors);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <p>Name: <input type="text" name="name"/></p>
        <p>Email: <input type="email" name="email"/></p>
        <p>Password: <input type="password" name="password"/></p>
        <p>Password Confirmation: <input type="password" name="password_confirmation"/></p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}