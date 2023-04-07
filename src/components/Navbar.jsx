import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}> 
            <nav className={click ? 'nav-active' : ''}>
                <Link to='/' className={click || colorChange ? 'nav-logo-active colorChange-link' : 'nav-logo'} onClick={closeMobileMenu}>
                    KamTech
                </Link>
                <Link to='/' className={colorChange ? 'desktop-logo colorChange-link' : 'desktop-logo'} onClick={closeMobileMenu}>
                    KamTech
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <img className='menu' src={click ? 'img/cancel-1.png' : 'img/menu-1.png'} alt="KamTech" />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to="/"  className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/#about"  className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/#services"  className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/#project"  className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            Project
                        </Link>
                    </li>
                    <li className='navBtn'>
                        <Link to="/message" className={colorChange ? 'nav-btn colorChange-nav-btn' : 'nav-btn'}  onClick={closeMobileMenu}>
                            Lets Connect
                        </Link>
                    </li>
                </ul>


            </nav>
        </div>
    )
}

export default Navbar