import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if(username.trim() !== '') {
      navigate('/app');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Login</h1>
      <input 
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-4 rounded"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
