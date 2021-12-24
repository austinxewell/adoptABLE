import React from 'react'
import HomeImage from '../../assets/images/HomeImage.jpg'

export default function Home () {
    return (
        <div>
            <title>
                <h2>Home</h2>
            </title>
            <div className='columns'>
                <img className='column is-half' src={ HomeImage }></img>
                <h3 className='column'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </h3>
            </div>
        </div>
    )
}