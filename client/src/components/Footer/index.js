import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className=''>
            <h4>adoptABLE</h4>
            <div>
                <h5>RESOURCES</h5>
                <ul>
                    <li><a href='https://www.udvc.org/' target='_blank'>Utah Domestic Violence Coalition</a></li>
                    <li><a href='https://dcfs.utah.gov/' target='_blank'>Utah Department of Human Services</a></li>
                    <li><a href='https://www.domesticshelters.org/' target='_blank'>Domestic Shelters</a></li>
                    <li><a href='https://nrd.gov/' target='_blank'>National Resource Directory</a></li>
                    <li><a href='https://www.sldvc.org/' target='_blank'>Salt Lake Domestiv Violence Coalition</a></li>
                </ul>
            </div>
            <div>
                <h5>HOW TO HELP</h5>
                <ul>
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
            </div>
        </footer>
    )
}