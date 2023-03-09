import React, { useState } from 'react';

function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label htmlFor="email">E-mail Address:</label>
        <input type="text" name="email" value={data.email} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={data.password} onChange={(e) => handleChange(e)} />
      </div>
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
}

export default LoginPage;