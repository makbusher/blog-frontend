export function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form action="http://localhost:3000/users.json" method="POST">
        <p>Name: <input type="text" name="name"/></p>
        <p>Email: <input type="text" name="email"/></p>
        <p>Password: <input type="text" name="password"/></p>
        <p>Password Confirmation: <input type="text" name="password_confirmation"/></p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}