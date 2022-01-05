import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import './login.css'

import Auth from '../../utils/auth';

export default function Login (props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

    return (
      <section className=''>
          <div className='container boxLogin has-text-centered is-centered mt-3'>
            <h2 className='container'>
            Login
            </h2>
            <Link className='container aLogin' to='signup'>← Go to Signup</Link>
            </div>
            <div className='container'>
              <div>
              
                <div className='boxLogin loginContainer columns is-centered is-vcentered'>
                
                  <form className='' onSubmit={handleFormSubmit}>
                  
                    <div className=''>
                    
                      <label className='columns is-centered loginLabel' htmlFor="">Email:</label>
                    
                      <input className='' placeholder='Your Email' name='email' type='email' id='email' value={formState.email} onChange={handleChange} />
                  
                    </div>
                  
                    <div className=''>
                    
                      <label className='columns is-centered loginLabel' htmlFor="">Password:</label>
                    
                      <input className='' placeholder='*******' name='password' type='password' id='password' value={formState.password} onChange={handleChange} />
                  
                    </div>
                  
                    <div className='columns is-centered'>
                    
                      <button className='loginSubmitButton' type="submit">Submit</button>
                  
                    </div>
                
                  </form>
                
                {error && <div>Login failed</div>}
                </div>
              </div>
            </div>
          </section>
      );
    
}