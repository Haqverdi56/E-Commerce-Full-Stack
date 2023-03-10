import React, { useState } from 'react';
import './loginpage.scss'

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
    <div className='signup-container'>
      <div className='signup-container-inner'>
        <h3>Login</h3>
        <form onSubmit={handleLogin} className='form'>
          <div className='form-div'>
            <label htmlFor="email">E-mail Address:</label>
            <input type="text" name="email" value={data.email} onChange={(e) => handleChange(e)} />
          </div>
          <div className='form-div'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={data.password} onChange={(e) => handleChange(e)} />
          </div>
          <button type='submit' disabled={!data.email || !data.password ? true : false}>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;