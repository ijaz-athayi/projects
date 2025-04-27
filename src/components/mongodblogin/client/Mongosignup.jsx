import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Mongosignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', { name, email, password });
      // Handle successful signup
      console.log(response.data);
    } catch (err) {
      // Handle signup error
      console.error(err);
    }
  };

  return (
    <div className='w-100 vh-100 bg-black d-flex align-items-center justify-content-center '>
      <div  className='w-40 d-flex align-items-center justify-content-center flex-column p-5 bg-white'>
        <h2>SIGNUP</h2>
    <form onSubmit={handleSignup} className='d-flex flex-column'>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className='m-2' />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='m-2'  />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='m-2' />
      <button type="submit" className='m-2' >Signup</button>
    </form>
    <span>already an user! <Link to={'/mongologin'} >login</Link> </span>
    </div>
    </div>
  );
}

export default Mongosignup;
