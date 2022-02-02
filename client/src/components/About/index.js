import React from 'react'
import './about.css'
import img from '../../assets/images/statsimage.jpg';
import { Link } from 'react-router-dom'

export default function About () {
    return (
        <section className=''>
          <div className='container aboutBox columns has-text-left is-centered mt-3'>
            <h1 className='container'>
            About
            </h1>
          </div>
            <div className = 'container'>
              <div className='aboutBox aboutContainer columns is-vcentered'>
                <img className="aboutImg is-half column" src={img} alt="Facts about Domestic Violence" />
                <h3 className='aboutContent column'>With domestic violence cases rising sharply by 25-50% in 2021 alone, adoptABLE aims to provide additional assistance to victims and their families. <br></br><br></br>Using adoptABLE, victims can create anonymous accounts seeking assistance and donors can "adopt" families to assist. We are a small start-up project looking to make a big difference in our community. Our team is passionate about assisting victims of domestic violence and we hope to bring hope and success to families in need.</h3>
            </div>
            <Link 
                    className='' 
                    to='donate' 
                    key='Donate'
                    >
                    Donate
                    </Link>
          </div>
        </section>
    )
}