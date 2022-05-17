import React, { useState } from "react"
// import Modal from 'react-modal';
import { Link } from 'react-router-dom'
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