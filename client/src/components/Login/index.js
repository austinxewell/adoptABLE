import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function Login (props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
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
      username: '',
      password: '',
    });
  };

    return (
      <section>
          <br/>
          
          <div className='columns is-centered'>
            
            <h2 className=''>Login</h2>
          
          </div>
          
          <div className='columns is-centered is-hcentered'>
            
            <form className='' onSubmit={handleFormSubmit}>
              
              <div className=''>
                
                <label className='columns is-centered' htmlFor="">Username:</label>
                
                <input className='' placeholder='Your Username' name='username' type='username' id='username' value={formState.username} onChange={handleChange} />
              </div>
              
              <div className=''>
                
                <label className='columns is-centered' htmlFor="">Password:</label>
                
                <input className='' placeholder='*******' name='password' type='password' id='password' value={formState.password} onChange={handleChange} />
              </div>
              
              <div className='columns is-centered'>
                
                <button className='' type="submit">Submit</button>
              </div>
            </form>
            
            {error && <div>Login failed</div>}

            </div>
          </section>
      );
    
}