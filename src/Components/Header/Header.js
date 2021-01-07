import React, {useState} from 'react'
import './Header.css'

function Header(){
    return(
        <div>
            <div className='headerDiv'>
                <h1 className='hello'>Hello</h1>
                <h2 className='name'>I'm Noah Van Buskirk</h2>
                <h2 className='greeting'>Welcome to my portfolio!</h2>
            </div>
        </div>
    )
}

export default Header