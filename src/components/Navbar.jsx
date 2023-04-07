import React, { useState, useRef } from 'react'
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


    const scroll = () => {
        const section = document.querySelector('#hero');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scroll1 = () => {
        const section = document.querySelector('#about');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scroll2 = () => {
        const section = document.querySelector('#services');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scroll3 = () => {
        const section = document.querySelector('#project');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

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

                    <li className='nav-item' onClick={scroll}>
                        <Link to="/" className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onClick={scroll1}>
                        <Link to="/" className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item' onClick={scroll2}>
                        <Link to="/" className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>
                    <li className='nav-item' onClick={scroll3}>
                        <Link to="/" className={colorChange ? 'nav-link colorChange-link' : 'nav-link'} onClick={closeMobileMenu}>
                            Project
                        </Link>
                    </li>
                    <li className='navBtn'>
                        <Link to="/message" className={colorChange ? 'nav-btn colorChange-nav-btn' : 'nav-btn'} onClick={closeMobileMenu}>
                            Lets Connect
                        </Link>
                    </li>
                </ul>


            </nav>
        </div>
    )
}

export default Navbar