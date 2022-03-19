/*import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import Icon from '../../icon'
const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <Icon />                
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/newProducts" activeStyle>
                    New Products
                </NavLink>
                <NavLink to="/women" activeStyle>
                    Women
                </NavLink>
                <NavLink to="/men" activeStyle>
                    Men
                </NavLink>
                <NavLink to="/kid" activeStyle>
                    Kid
                </NavLink>
                <NavLink to="/accessories">
                    Accessories
                </NavLink>
            </NavMenu>            
        </Nav>
    </>
  )
}*/
import React from 'react'
import Icon from '../../icon'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './index.css'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <div className='logo'>
                <Icon />
            </div>            
            <nav ref={navRef}> 
                <a href="/home">Home</a>
                <a href="/newProducts">New Products</a>
                <a href="/women">Women</a>
                <a href="/men">Men</a>
                <a href="/kid">Kid</a>
                <a href="/accessories">Accessories</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar