import React from 'react'
import styles from '../styles/Navbar.module.css'
import ui from '../styles/UI-components.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
        <div className={`${styles.navbar} container`}>
            <a href='/' className={styles.navbar__link}>Agents</a>
            <a href='/' className={styles.navbar__link}>HomeBuyers</a>
            <a href='/' className={styles.navbar__link}>Resources</a>
            <a href='/' className={styles.navbar__link}>Log In</a>
            <a href='/' className={ui.button}>Sign Up Now</a>
        </div>
    </div>
  )
}

export default Navbar
