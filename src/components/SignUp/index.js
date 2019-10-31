import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log([email, password]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        value={email}
        type="text"
        name="email"
        placeholder=" enter your email"
        onChange={e => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        value={password}
        type="password"
        name="password"
        placeholder="enter your password"
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
