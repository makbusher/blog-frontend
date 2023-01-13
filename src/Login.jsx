export function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form action="http://localhost:3000/sessions.json" method="POST">
        <p>Email: <input name="email" type="email"/></p>
        <p>Password: <input name="password" type="password"/></p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}