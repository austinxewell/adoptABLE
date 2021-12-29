import React from 'react'
import img from '../../assets/images/support.jpg'

export default function Contact () {
    return (
        <section className="purplecolor2 container.is-fullhd">
            <br/>
            <div>
                <h2 className="has-text-centered contactpagetitle">
                    Contact
                </h2>
            
                <div className="columns">
                    <div className="column is-6">
                        <form className='mx-4'>
                            <label className="contactlabel" htmlFor="name">
                                Name:
                            </label>

                            <input className="contactinput is-primary" type="text" name="name"/>

                            
                            <label className="contactlabel" htmlFor="email">
                                Email:
                            </label>
                            <input className="contactinput" type="email" />
                            <label className="contactlabel" htmlFor="subject">
                                Subject:
                            </label>
                            <input className="contactinput" type="text" name="subject" />
                            <label className="contactlabel" htmlFor="body">
                                Body:
                            </label>
                            <textarea className="contactinput" name="body" />
                            <button className="contactsubmitbutton" type="submit">Submit</button>
                        </form>
                        <div className="mx-4">
                            <span className="contactlinkstitle">Additional resources</span>
                            <ul>
                                <li>
                                    <a className="contactlinks" target="_blank" href="https://www.udvc.org/">Utah Domestic Violence Coalition</a>
                                </li>
                                <li>
                                    <a className="contactlinks" target="_blank" href="https://dcfs.utah.gov/">Utah department of human services</a>
                                </li>
                                <li>
                                    <a className="contactlinks" target="_blank" href="https://www.domesticshelters.org/">Domestic Shelters</a>
                                </li>
                                <li>
                                    <a className="contactlinks" target="_blank" href="https://nrd.gov/">National Resource Directory</a>
                                </li>
                                <li>
                                    <a className="contactlinks" target="_blank" href="https://www.sldvc.org/">Salt Lake Domestic Violence Coalition</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column is-6">
                        <img className="contactimage" src={img} alt="Support for domestic violence" />
                    </div>
                </div>
            </div>
        </section>
    )
}