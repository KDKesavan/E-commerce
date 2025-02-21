import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const RegisterForm = styled.form`
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
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #218838;
  }
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/register', { username, email, password });
    navigate('/login');
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleRegister}>
        <h2>Register</h2>
        <Input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
        <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type='submit'>Register</Button>
      </RegisterForm>
    </Container>
  );
};

export default Register;
