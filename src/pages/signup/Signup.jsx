import React, { useState } from 'react'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      
    } 
  }
  return (
    <div>
      <h1>Sign up</h1>
      <div>
        <label htmlFor="email">E-mail Address:</label>
        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Registr</button>
    </div>
  )
}

export default Signup