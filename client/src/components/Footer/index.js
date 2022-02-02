import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <h4 className='footer-title'>adoptABLE</h4>
            <container className="main-footer-links">
                <div className='resources-container'>
                    <h5>RESOURCES</h5>
                    <ul className='resource-list'>
                        <li><a href='https://www.udvc.org/' target='_blank'>Utah Domestic Violence Coalition</a></li>
                        <li><a href='https://dcfs.utah.gov/' target='_blank'>Utah Department of Human Services</a></li>
                        <li><a href='https://www.domesticshelters.org/' target='_blank'>Domestic Shelters</a></li>
                        <li><a href='https://nrd.gov/' target='_blank'>National Resource Directory</a></li>
                        <li><a href='https://www.sldvc.org/' target='_blank'>Salt Lake Domestiv Violence Coalition</a></li>
                    </ul>
                </div>
                <div>
                    <h5>HOW TO HELP</h5>
                    <ul className='help-list'>
                        <li>
                            <Link
                                className=''
                                to='donate'
                                key='Donate'
                            >Donate
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=''
                                to='adopt'
                            >Adopt a Familiy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>DEVELOPERS</h5>
                    <ul className='developers-list'>
                        <li><a href='https://github.com/austinxewell/adoptABLE' target='_blank'>GitHub</a></li>
                        <li>
                            <Link
                                className=''
                                to='contact'
                            >Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </container>
            <div>
                <p className='copyright-text'>&copy; by: adoptABLE Developer Team</p>
            </div>
        </footer>
    )
}