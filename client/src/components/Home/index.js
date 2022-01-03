import React from 'react'
import HomeImage from '../../assets/images/HomeImage.jpg'
import './home.css'

export default function Home () {
    return (
        <section className=''>
          <div className='container boxHome columns has-text-centered is-centered mt-3'>
            <h2 className='container'>
            adoptABLE
            </h2>
          </div>
          <div className='container'>
            <div>
            <div className='boxHome homeContainer columns is-vcentered'>
                <img className='column is-7 homeImg' src={ HomeImage }></img>
                <h3 className='column'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </h3>
            </div>
            </div>
            </div>
            </section>
    )
}