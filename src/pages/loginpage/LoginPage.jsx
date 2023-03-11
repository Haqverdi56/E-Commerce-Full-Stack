import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.scss'

function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  console.log(data);
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', data)
    .then(res => {
      setData(res.data)
      navigate("/confirm");
    })
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
            <input type="text" name="email" defaultValue={data.email} onChange={(e) => handleChange(e)} />
          </div>
          <div className='form-div'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" defaultValue={data.password} onChange={(e) => handleChange(e)} />
          </div>
          <button type='submit' disabled={!data.email || !data.password ? true : false} className="submitButton">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;