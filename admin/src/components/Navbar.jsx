import React from 'react'
import {navbarStyles as ns} from '../assets/dummyStyles'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className={ns.header}>
        <nav className={ns.navContainer}>
            <div className={ns.flexContainer}>
                <div className={ns.logoContainer}>
                    <img src={logoImg} alt="logo" className={ns.logoImage} />

                    <Link to='/' >
                    <div className={ns.logoLink}>
                        Medicare
                    </div>
                    
                    </Link>
                </div>
            </div>
        </nav>

    </header>
  )
}

export default Navbar