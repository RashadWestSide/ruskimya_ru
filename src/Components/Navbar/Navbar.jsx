import React, {useState} from 'react'
import './navbar.css'
//import Logo from '../../Assets/logo1.png'
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { MdMenuBook } from 'react-icons/md'
import { AiTwotoneHome } from 'react-icons/ai'
import { GiBarrelLeak } from 'react-icons/gi'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {

  const [active, setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNav = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <Link to="/" className='logo'>
          {/* <img className='logoImg' src={Logo} alt='logo'/> */}
          <h1 className='flex'><GiBarrelLeak className='icon' />
            RUS`KIMYA
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className='navLists grid'>
            
            <li className='navItem'><AiTwotoneHome className='iconNav'/>
              <Link to="/" className='navLink'>Главная</Link>
            </li>

            <li className='navItem'><MdMenuBook className='iconNav'/>
              <Link to="/products" className='navLink'>Ассортимент</Link>
            </li>

            <li className='navItem'><RiContactsBook2Fill className='iconNav'/>
              <Link to="/contacts" className='navLink'>Контакты</Link>
            </li>
          </ul>

          <div onClick={removeNav} className='closeNavbar'>
            <AiOutlineCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar
