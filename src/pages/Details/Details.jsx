import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Details.module.css'
// import Slideshow from '../../components/Slideshow/Slideshow'
import LocationCarousel from '../../components/LocationCarousel/LocationCarousel.jsx'
import { FaMapPin, FaInstagramSquare } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'

const Details = () => {
  return (
    <div className={`${styles.detailsContainer}`}>
      <LocationCarousel />
      {/* <Slideshow /> */}
      <h4 className={`${styles.detailsTime}`}>DINNER &amp; DRINKS</h4>
      <h4 className={`${styles.detailsTime}`}>SATURDAY, OCTOBER 22, 2022 <br/>6:00 PM</h4>
      <h4 className={`${styles.detailsLocation}`}>LE FANFARE</h4>
      <h4 className={`${styles.detailsAddress}`}>1103 Manhattan Ave <br/>Brooklyn NY</h4>
      <div className={`${styles.linksContainer}`}>
        <Link to={{ pathname: "https://goo.gl/maps/37VstfhxFq2HZr8s6" }} target="_blank" className={`${styles.iconContainer}`}>
            <FaMapPin className={styles.detailsIcon}/>
            <h4 className={`${styles.detailsLink}`}>Directions</h4>
        </Link>
        <Link to={{ pathname: "http://www.lefanfare.com/" }} target="_blank" className={`${styles.iconContainer}`}>
            <BiWorld className={styles.detailsIcon}/>
            <h4 className={`${styles.detailsLink}`}>Website</h4>
        </Link>
        <Link to={{ pathname: "https://www.instagram.com/lefanfare/?hl=en" }} target="_blank" className={`${styles.iconContainer}`}>
            <FaInstagramSquare className={styles.detailsIcon}/>
            <h4 className={`${styles.detailsLink}`}>Instagram</h4>
        </Link>
      </div>
    </div>
  )
}

export default Details