import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import RSVPModal from "../RSVPModal/RSVPModal.jsx"

const NavBar = () => {

  const [checked, setChecked] = useState(false)

  const handleCheckBox = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false)
  }

  const closeHamburger = () => {
    setChecked(false)
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <div 
      className={
      checked ? styles.navContainerChecked : styles.navContainer }
    >
      <div className={styles.hamburgerContainer}>
        <input type='checkbox' 
        checked={checked}
          className={styles.toggler}
          onChange={(e) => {
            handleCheckBox(e)
          }}
        />
        <div className={styles.hamburger}>
          <div></div>
        </div>
      </div>
      <ul className={
        checked ? styles.navItemsChecked : styles.navItems }
        onClick={() => {
          closeHamburger()
        }}>
        <li className={
        checked ? styles.navItemChecked : styles.navItem}>
            <NavLink exact to='/' className={checked ? styles.navTextChecked : styles.navText } activeClassName={styles.activeNavText}>R+W</NavLink>
        </li>
        <li className={
        checked ? styles.navItemChecked : styles.navItem}>
            <NavLink to='/details' className={checked ? styles.navTextChecked : styles.navText } activeClassName={styles.activeNavText}>Details</NavLink>
        </li>
        <li className={
        checked ? styles.navItemChecked : styles.navItem}>
          <NavLink to='/registry' className={checked ? styles.navTextChecked : styles.navText } activeClassName={styles.activeNavText}>Registry</NavLink>
        </li>
        <li className={
        checked ? styles.navItemChecked : styles.navItem}>
            <NavLink to='/lodging' className={checked ? styles.navTextChecked : styles.navText } activeClassName={styles.activeNavText}>Where to Stay</NavLink>
        </li>
        <li className={
        checked ? styles.navItemChecked : styles.navItem}>
            <button className={checked ? `button-hb` : `button-sm` }onClick={() => {
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