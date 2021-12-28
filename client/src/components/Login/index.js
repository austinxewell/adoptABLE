import React from 'react'

export default function Login() {
    return (
        <section>
                <div className='is-half is-offset-one-fifth'>
                <h2 className=''>
                  Login
                </h2>
                </div>
        <div className=''>
          <form className='' id="" onSubmit="">
            <div className=''>
              <label htmlFor="">Name:</label>
              <input className='' type="" name="" defaultValue="" onBlur="" />
            </div>
            <div className=''>
              <label htmlFor="">Email address:</label>
              <input className='' type="" name="" defaultValue="" onBlur="" />
            </div>
            <div className=''>
              <label htmlFor="">Message:</label>
              <textarea className='' name="" rows="" defaultValue="" onBlur="" />
            </div>
            {/* {errorMessage && (
              <div>
                <p className="">{errorMessage}</p>
              </div>
            )} */}
            <div className=''>
            <button className='' data-testid="" type="">Submit</button>
            </div>
          </form>
          </div>
        </section>
      );
    
}