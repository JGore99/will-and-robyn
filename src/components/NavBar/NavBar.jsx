import React from "react"
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navItems}>
        <li>
            <Link to='/' >
              <h3 className={styles.navText} >R+W</h3>
            </Link>
        </li>
        <li>
            <Link to='/details' >
              <h3 className={styles.navText} >Details</h3>
            </Link>
        </li>
        <li>
            <Link to='/registry' >
              <h3 className={styles.navText} >Registry</h3>
            </Link>
        </li>
        <li>
            <Link to='/lodging' >
              <h3 className={styles.navText} >Where to Stay</h3>
            </Link>
        </li>
        <li>
            <button className="button-sm">
              RSVP
            </button>
        </li>
      </ul>
    </div>
  )
}

export default NavBar