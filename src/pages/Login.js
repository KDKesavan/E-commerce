// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(loginUser({ email, password }));
//     if (result.payload) navigate('/dashboard');
//   };

//   return (
//     <div>
//         <center>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <br></br>
//         <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <br></br>
//         <button type='submit'>Login</button>
//       </form>

//         </center>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (result.payload) {
      localStorage.setItem("loginId", result.payload.id);
      navigate('/dashboard');
    } else if (result.error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type='submit'>Login</Button>
      </LoginForm>
    </Container>
  );
};

export default Login;

