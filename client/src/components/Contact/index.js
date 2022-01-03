import React from 'react'
import img from '../../assets/images/support.jpg'
import './contact.css'

export default function Contact () {
    return (
        <section className=''>
            <div className='container boxContact columns has-text-centered is-centered mt-3'>
                <h2 className="container">
                    Contact
                </h2>
            </div>
            <div className='container'>
            <div>
            <div className="columns contactContainer1 boxContact in-vcentered">
                <form className='column is-6'>
                        <label className="contactlabel" htmlFor="name">
                            Name:
                        </label>

                        <textarea className="contactinput is-primary" type="text" name="name"/>

                        
                        <label className="contactlabel" htmlFor="email">
                            Email:
                        </label>
                        <textarea className="contactinput" type="email" />
                        <label className="contactlabel" htmlFor="subject">
                            Subject:
                        </label>
                        <textarea className="contactinput" type="text" name="subject" />
                        <label className="contactlabel" htmlFor="body">
                            Body:
                        </label>
                        <textarea className="contactinput" name="body" />
                        <button className="contactsubmitbutton" type="submit">Submit</button>
                    </form>
                <img className="contactimage column is-6" src={img} alt="Support for domestic violence" />
            </div>
            </div>
            </div>
            <div className='container'>
            <div className="columns has-text-centered contactContainer2 boxContact">
                        <div className='column'>
                        <h2 className="contactlinkstitle ">Additional resources</h2>
                        <ul>
                            <ol>
                                <a className='contactlinks' target="_blank" rel="noopener noreferrer" href="https://www.udvc.org/">Utah Domestic Violence Coalition </a>
                            </ol>
                            <ol>
                                <a className='contactlinks' target="_blank" rel="noopener noreferrer" href="https://dcfs.utah.gov/">Utah department of human services </a>
                            </ol>
                            <ol>
                                <a className='contactlinks' target="_blank" rel="noopener noreferrer" href="https://www.domesticshelters.org/">Domestic Shelters </a>
                            </ol>
                            <ol>
                                <a className='contactlinks' target="_blank" rel="noopener noreferrer" href="https://nrd.gov/">National Resource Directory </a>
                            </ol>
                            <ol>
                                <a className='contactlinks' target="_blank" rel="noopener noreferrer" href="https://www.sldvc.org/">Salt Lake Domestic Violence Coalition </a>
                            </ol>
                        </ul>
                        </div>
                    </div>
                    </div>
        </section>
    )
}