import React from 'react'
import './about.css'
import img from '../../assets/images/statsimage.jpg';

export default function About () {
    return (
        <section className=''>
          <div className='container aboutBox columns has-text-centered is-centered mt-3'>
            <h2 className='container'>
            About
            </h2>
          </div>
          <div className='container'>
        <div>
            <div className='aboutBox aboutContainer columns is-vcentered'>
                <img className="aboutImg is-half column" src={img} alt="Facts about Domestic Violence" />
                <h3 className='aboutContent column'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
        </div>
        </div>
        </section>
    )
}