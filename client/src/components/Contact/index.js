import React from 'react'
import img from '../../assets/images/support.jpg'

export default function Contact () {
    return (
        <div className="columns">
            <div className="column is-6">
                <form className='mx-4'>
                    <label for="name">
                        Name:
                    </label>
                    <input type="text" name="name"/>
                    <label for="email">
                        Email:
                    </label>
                    <input type="email" />
                    <label for="subject">
                        Subject:
                    </label>
                    <input type="text" name="subject" />
                    <label for="body">
                        Body:
                    </label>
                    <textarea name="body" />
                    <button type="submit">Submit</button>
                </form>
                <div className="mx-4">
                    <span>Additional resources</span>
                    <ul>
                        <li>
                            <a href="#">Something</a>
                        </li>
                        <li>
                            <a href="#">Something</a>
                        </li>
                        <li>
                            <a href="#">Something</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="column is-6">
                <img src={img} alt="Support for domestic violence" />
            </div>
        </div>
    )
}