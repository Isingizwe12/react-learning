import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
  return (
    <div>
        <div className='navbar py-6'>
            {/* left side */}
            <span className='left-side'><Link to="/">Home</Link></span>
            {/* right side */}
            <ul>
              <li className='cursor-pointer'><Link to="/about">About</Link></li>  
                <li className='cursor-pointer'>Contact Us</li>
                <li className='cursor-pointer'>Our Service</li>
            </ul>
            </div>
      
    </div>
  )
}

export default Navbar
