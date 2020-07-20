import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Header(props) {
    return(
        // Navbar
        <>
        <div id='navbar'>
            <h2><Link to='/'><span className="text-primary">Gabe</span> Sequeira-Bacher</Link></h2>
        <ul>
        <li><Link id='link' to='/'>Home</Link></li>
        <li><Link id='link' to='/about'>About</Link></li>
        <li><Link id='link' to='/projects'>Projects</Link></li>
        <li><Link id='link' to='/work'>Work</Link></li>
        <li><Link id='link' to='/hobbies'>Hobbies</Link></li>
        <li><a href='https://www.facebook.com/gabe.sequeira'><i className='fab fa-facebook-f'></i></a></li>
            </ul>
        </div>
        </>
    )
}

export default Header;