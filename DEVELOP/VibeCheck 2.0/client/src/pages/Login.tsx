// TODO CSS NEEDS WORK ON THIS PAGE

import { useState, type FormEvent, type ChangeEvent } from 'react';

import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    userName: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        {/* Username input field */}
        <div className="form">
          <label>Username</label>
          <input 
            className="form-input"
            type='text'
            name='userName'
            value={loginData.userName || ''}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div className="form">
          <label>Password</label>
          <input 
            className="form-input"
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the login form */}
        <div className="form">
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
};

export default Login;