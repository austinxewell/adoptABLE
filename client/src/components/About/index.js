import React from 'react'
import img from '../../assets/images/statsimage.jpg';

export default function About () {
    return (
        <section>
          <br/>
          <div className='columns is-centered'>
            <h2>
            About
            </h2>
          </div>
        <div className='columns'>
            <div className='column is-6'>
                <img className="aboutimg" src={img} alt="Facts about Domestic Violence" />
            </div>
            <div className='column is-6'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </section>
    )
}