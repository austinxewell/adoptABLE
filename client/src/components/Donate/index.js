import React from 'react'
import './donate.css'

export default function Donate(){




    return(
        <section>
          <div className='container donateBox columns has-text-centered is-centered mt-3'>
            <h2 className='container'>
            Donate
            </h2>
          </div>
          <div className='container'>
            <div>
              <div className='donateBox donateContainer columns is-centered is-vcentered'>
                <form>
                  <div>
                    <label className='columns is-centered donateLabel'>How much would you like to Donate?</label>
                    <input className='donateInput' placeholder=''></input>
                  </div>
                  <div className='columns is-centered'>
                    <button className='donateSubmitButton' type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    )
}