import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LocationCard.module.css'

const LodgingCard = ({ location, setLocationId }) => {
  return (
    <div className={`${styles.locationCard}`}>
      <h3 className={`${styles.locationName}`}>{location.name}</h3>
      <h4 className={`${styles.locationsubName}`}>{location.nameSubLine}</h4>
      
      <Link to={{ pathname: `${location.link}`}} target="_blank" className={`${styles.locationDetails}`}>{location.web}</Link>
      <h4 className={`${styles.locationDetails}`}>{location.phone}</h4>
      <h4 className={`${styles.locationDetails}`}>{location.price}</h4>
    </div>
  )
}

export default LodgingCard;