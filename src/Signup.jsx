import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users.json", params).then(response => {
      console.log(response.data);
      event.target.reset();
    })
      .catch(error => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <p>Name: <input type="text" name="name"/></p>
        <p>Email: <input type="text" name="email"/></p>
        <p>Password: <input type="text" name="password"/></p>
        <p>Password Confirmation: <input type="text" name="password_confirmation"/></p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}