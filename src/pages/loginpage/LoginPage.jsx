import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      // Burada onay kodu doğrulama işlemlerini gerçekleştirebiliriz.
      // Örneğin, bir API çağrısı yaparak sunucu tarafında doğrulama işlemi yapabiliriz.
      // Eğer doğrulama başarılıysa, kullanıcıyı ana sayfaya yönlendirebiliriz.
      console.log("Giriş yapıldı!");
    } 
  }

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label htmlFor="email">E-mail Address:</label>
        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
}

export default LoginPage;