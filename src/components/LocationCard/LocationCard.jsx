import React from 'react'
import styles from './LocationCard.module.css'

const LodgingCard = ({ location, setLocationId }) => {
  return (
    <div className={`${styles.locationCard}`}>
      <h3 className={`${styles.locationName}`}>{location.name}</h3>
      <h4 className={`${styles.locationTitle}`}>{location.web}</h4>
      <h4 className={`${styles.locationTitle}`}>{location.phone}</h4>
    </div>
  )
}

export default LodgingCard;