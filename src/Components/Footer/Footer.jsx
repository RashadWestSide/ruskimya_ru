import React from 'react'
import { GiBarrelLeak } from 'react-icons/gi'
import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
           <Link to="/" className='logo flex'>
            <h1 className='flex'><GiBarrelLeak className='icon' />
            RUS`KIMYA
            </h1>
           </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
