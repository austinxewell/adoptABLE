import React from 'react'
import HomeImage from '../../assets/images/HomeImage.jpg'
import './home.css'

export default function Home () {
    return (
        <section>
          <div className='container boxHome columns has-text-right is-centered mt-3'>
            <h1 className='container'>
                  adoptABLE
            </h1>
          </div>
          <div className='container'>
            <div>
            <div className='boxHome homeContainer columns is-vcentered'>
                <img className='column is-7 homeImg' src={ HomeImage }></img>
                <h3 className='column'>With domestic violence cases rising sharply by 25-50% in 2021 alone, adoptABLE aims to provide additional assistance to victims and their families. Using adoptABLE, victims can create anonymous accounts seeking assistance and donors can "adopt" families to assist.</h3>
            </div>
            </div>
            </div>
            </section>
    )
}