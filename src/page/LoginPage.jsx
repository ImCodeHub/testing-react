import React, { useState } from 'react'
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    const credentials = {
      userName: userName,
      password: password,
    };

    try {
      const data = await login(credentials);
      localStorage.setItem("access_token", data.access_token);
      console.log("Login successful");
    
      // Navigate to the dashboard after successful login
      navigate("/job");
    } catch (error) {
      alert("ther is some error")
    }
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>user name</label>
        <input type="text" name="userName" value={userName} onChange={(e)=>setEmail(e.target.value)} placeholder='username' />
        <br />
        <label>password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage