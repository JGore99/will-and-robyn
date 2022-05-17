import React, { useState } from "react"
// import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import RSVPModal from "../RSVPModal/RSVPModal.jsx"

const NavBar = () => {

  // Modal.setAppElement(RSVPModal)

  const [modalIsOpen, setIsOpen] = useState(false)

  // function openModal() {
  //   setIsOpen(true);
  // }
 
  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
            <NavLink exact to='/' className={styles.navText} activeClassName={styles.activeNavText}>R+W</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to='/details' className={styles.navText} activeClassName={styles.activeNavText}>Details</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/registry' className={styles.navText} activeClassName={styles.activeNavText}>Registry</NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink to='/lodging' className={styles.navText} activeClassName={styles.activeNavText}>Where to Stay</NavLink>
        </li>
        <li>
            <button className="button-sm" onClick={() => {
              setIsOpen(true)
            }}>
              RSVP
            </button>
        </li>
      </ul>
      {modalIsOpen && <RSVPModal isOpen={modalIsOpen}
        closeModal={setIsOpen}
        contentLabel="Example Modal"/>} 
    </div>
  )
}

export default NavBar