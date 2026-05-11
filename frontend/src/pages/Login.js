import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.login(email, password);
      localStorage.setItem('token', response.data.access_token);
      const user = await auth.getMe();
      localStorage.setItem('role', user.data.role);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-slate-900 p-3 rounded-lg mb-4 border border-slate-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-slate-900 p-3 rounded-lg mb-6 border border-slate-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 p-3 rounded-lg font-bold hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
