import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "./firebaseconfig"; 


function Mongologin() {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/login', { email, password });
  //     // Handle successful login
  //     console.log(response.data);
  //   } catch (err) {
  //     // Handle login error
  //     console.error(err);
  //   }
  // };


const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3001/login', { name, password });
    // Handle successful login
   console.log(response.data);
    navigate('/homepage')
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', err.message);
    }
  }
};

  const handlegooglesignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google");
      navigate("/homepage");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handlefacebooksignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log("User signed in with Facebook");
      navigate("/homepage");
    } catch (error) {
      console.error("Error signing in with Facebook:", error.message);
    }
  };


  return (
    <div className='w-100 vh-100 bg-black d-flex align-items-center justify-content-center '>
      <div className='w-40 d-flex align-items-center justify-content-center flex-column p-5 pb-3 pt-3 bg-white '>
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin} className='d-flex flex-column'>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className='mb-1 text-center' />
      {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='m-2' /> */}
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='mt-2 mb-2 text-center' />
      <button type="submit"  className='m-2 rounded'>Login</button>
    </form>
    <span>not a user! <Link to={'/mongosignup'} className='text-decoration-none'>signup</Link></span> 
    <span>or</span><span>sign in with..</span>
    <div className='d-flex align-items-center' >
    <button onClick={handlegooglesignin} className='m-2 border-1 p-1 rounded'>google</button>
    <button onClick={handlefacebooksignin} className='m-2 border-1 p-1 rounded'>facbook</button>
    </div>
    </div>
    </div>
    
  );
}

export default Mongologin;
