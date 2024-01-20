import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  
  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    console.clear();
    console.log('🚀 ~ file: AddUser.js:25 ~ useEffect ~ user:', user);
  }, [user]);

  const inputSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8080/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigate("/")
  };

  console.log(user);

  return (
    <div className='container'>
      <div className='row'>
        <form
          onSubmit={(e) => {
            inputSubmit(e);
          }}
        >
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={(e) => {
                  onInputChange(e);
                }}
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                User name
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter your user name'
                name='username'
                value={username}
                onChange={(e) => {
                  onInputChange(e);
                }}
              ></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                E-mail
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter your e-mail'
                name='email'
                value={email}
                onChange={(e) => {
                  onInputChange(e);
                }}
              ></input>
            </div>
            <button type='submit' className='btn btn-outline-primary'>
              Submit
            </button>
            <Link className='btn btn-outline-danger mx-2' to="/">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
