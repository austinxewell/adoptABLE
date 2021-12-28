import React from 'react'

export default function Login() {
    return (
      <section>
          <br/>
          <div className='columns is-centered'>
            <h2 className=''>
            Login
            </h2>
          </div>
        <div className='columns is-centered is-hcentered'>
          <form className='' id="" onSubmit="">
            <div className=''>
              <label className='columns is-centered' htmlFor="">Username:</label>
              <input className='' type="" name="" defaultValue="" onBlur="" />
            </div>
            <div className=''>
              <label className='columns is-centered' htmlFor="">Password:</label>
              <input className='' type="" name="" defaultValue="" onBlur="" />
            </div>
            {/* {errorMessage && (
              <div>
                <p className="">{errorMessage}</p>
              </div>
            )} */}
            <div className='columns is-centered'>
              <button className='' data-testid="" type="">Submit</button>
            </div>
          </form>
          </div>
        </section>
      );
    
}