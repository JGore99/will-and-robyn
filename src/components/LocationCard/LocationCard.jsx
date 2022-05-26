import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LocationCard.module.css'

const LodgingCard = ({ location, setLocationId }) => {
  return (
    <div className={`${styles.locationCard}`}>
      <h3 className={`${styles.locationName}`}>{location.name}</h3>
      <Link to={{ pathname: `${location.link}`}} target="_blank" className={`${styles.locationTitle}`}>{location.web}</Link>
      <h4 className={`${styles.locationPhone}`}>{location.phone}</h4>
      <h4 className={`${styles.locationPrice}`}>{location.price}</h4>
    </div>
  )
}

export default LodgingCard;