import React from 'react'
import HomeImage from '../../assets/images/HomeImage.jpg'
import './home.css'

export default function Home() {
  return (
    <section className='home-container'>
      <div className='container boxHome columns has-text-right is-centered mt-3'>
        <h1 className='container'>adoptABLE</h1>
      </div>
      <div className=' info-wrapper'>
        <div>
          <div className='boxHome homeContainer columns'>
            
            <img className='column is-7 home-image' src={HomeImage}></img>
            <p className='column info-text'>We are a small team dedicated to helping victims of domestic violence. We want to create an "adopt a family" website specifically for victims of DV. We want our adobtable families to be able to add anonymous family member information, products needed (winter clothing, holiday gifts, Christmas tree, hygiene products), assistance needed (seeking GED tutoring, transportation, gas cards, food cards, place to stay, etc), and communicate those needs with other members of our community who want to provide a helping hand. The donors would see the anonymous family information and choose to "adopt" a family to help out with any items they can. We understand that DV shelters are overrun right now, in 2021 in Utah alone, victims seeking assistance increased by 25-50%. Were here becasue we are passionate about creating positive experiences.</p>
          </div>

        </div>
      </div>
    </section>
  )
}