import React from 'react'
import styles from './NavbarStyle'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const links = ['About us', 'Services', 'FAQs']
    return (
        <div style={styles.navbarContainer}>
            <div style={styles.navbarParts}>
                <Link to='/'><img src={logo} style={{height:'80px'}}/></Link>
            </div>
            <div style={styles.navbarParts}>
                {links.map((link) => {
                    return (
                        <Link to={`/${link === 'About us' ? 'About' : link}`}><span className='linkHover' style={{marginLeft:'10px', marginRight:'10px'}}>{link}</span></Link>
                    )
                })}
            </div>
            <div style={styles.navbarParts}>
                <Link><span className='linkHover'>Contact us</span></Link>
            </div>

        </div>
    )
}
