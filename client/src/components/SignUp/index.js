import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import './signUp.css'

import Auth from '../../utils/auth';

export default function SignUp(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

    return (
        <section className=''>
          <div className='container boxSignUp has-text-centered is-centered mt-3'>
            <h2 className='container'>
            SignUp
            </h2>
            <a className='container aSignUp' href='#login' onClick={() => props.handlePageChange('Login')}>← Go to Login</a>

          </div>
          <div className='container'>
              <div>
                <div className='boxSignUp signUpContainer columns is-vcentered is-centered'>
                  
                  <form className='' id="" onSubmit={handleFormSubmit}>
                    
                    <div className=''>
                      
                      <label className='columns is-centered signUpLabel' htmlFor="">Username:</label>
                      
                      <input className='' placeholder='Your Username' name='username' type='text' id='username' value={formState.username} onChange={handleChange} />
                    
                    </div>
                    
                    <div className=''>
                      
                      <label className='columns is-centered signUpLabel' htmlFor="">Email address:</label>
                      
                      <input className='' placeholder='Your Email' name='email' type='email' id='email' value={formState.email} onChange={handleChange}  />
                    
                    </div>
                    
                    <div className=''>
                      
                      <label className='columns is-centered signUpLabel' htmlFor="">Password:</label>
                      
                      <input className='' placeholder='******' name='password' type='password' id='password' value={formState.password} onChange={handleChange} />
                    
                    </div>
                    
                    <div className='columns is-centered'>
                      
                      <button className='signUpSubmitButton' type="submit">Submit</button>
                    
                    </div>
                  
                  </form>

                  {error && <div>Signup Failed</div>}
              </div>
            </div>
          </div>
        
        </section>
      );
    
}