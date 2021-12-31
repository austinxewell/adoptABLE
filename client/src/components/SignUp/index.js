import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

export default function SignUp() {
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
        <section>
          <br/>
            
            <div className='columns is-centered'>
              
              <h2 className=''>Sign-Up</h2>

            </div>
          
          <div className='columns is-centered is-hcentered'>
            
            <form className='' id="" onSubmit={handleFormSubmit}>
              
              <div className=''>
                
                <label className='columns is-centered' htmlFor="">Username:</label>
                
                <input className='' placeholder='Your Username' name='username' type='username' id='username' value={formState.username} onChange={handleChange} />
              
              </div>
              
              <div className=''>
                
                <label className='columns is-centered' htmlFor="">Email address:</label>
                
                <input className='' placeholder='Your Email' name='email' type='email' id='email' value={formState.email} onChange={handleChange}  />
              
              </div>
              
              <div className=''>
                
                <label className='columns is-centered' htmlFor="">Password:</label>
                
                <input className='' placeholder='******' name='password' type='password' id='password' value={formState.password} onChange={handleChange} />
              
              </div>
              
              <div className='columns is-centered'>
                
                <button className='' type="submit">Submit</button>
              
              </div>
            
            </form>

            {error && <div>Signup Failed</div>}
          
          </div>
        
        </section>
      );
    
}