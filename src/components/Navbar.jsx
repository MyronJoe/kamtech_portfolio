import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <header>
                <nav>
                    <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
                        KamTech
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>

                    <div className="menu-list">
                        <ul>
                            <li className='nav-item'>
                                <Link to="" className='nav-link' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="" className='nav-link' onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="" className='nav-link' onClick={closeMobileMenu}>
                                    Service
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="" className='nav-link' onClick={closeMobileMenu}>
                                    Project
                                </Link>
                            </li>
                            <li className='navBtn'>
                                <Link to="" className='nav-btn' onClick={closeMobileMenu}>
                                    Lets Connect
                                </Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar