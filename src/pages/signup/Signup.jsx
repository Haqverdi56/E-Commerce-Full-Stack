import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './signup.scss'

function Signup() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/users/register`, data)
    .then(response => console.log(response));
    navigate("/login")
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
        <h3>Sign up</h3>
        <form onSubmit={handleLogin} className='form'>
          <div className='form-div'>
            <label htmlFor="email">E-mail Address:</label>
            <input type="text" name="email" value={data.email} onChange={(e) => handleChange(e)} />
          </div>
          <div className='form-div'>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={data.password} onChange={(e) => handleChange(e)} />
          </div>
          <button type='submit' disabled={!data.email || !data.password ? true : false} className='submitButton'>Registr</button>
        </form>
      </div>
    </div>
  )
}

export default Signup