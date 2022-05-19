import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Details.module.css'
import leFanfarePhoto from '../../images/le_fanfare.png'

const Details = () => {
  return (
    <div className={`${styles.detailsContainer}`}>
      <img className={`${styles.detailsImage}`} src={leFanfarePhoto} alt="Le Fanfare" />
      <h4 className={`${styles.detailsTime}`}>SATURDAY, OCTOBER 22, 2022 <br/>6:00 PM</h4>
      <h4 className={`${styles.detailsLocation}`}>LE FANFARE</h4>
      <Link to={{ pathname: "http://www.lefanfare.com/" }} target="_blank" className={`${styles.detailsLink}`}>- website -</Link>
      <h4 className={`${styles.detailsAddress}`}>1103 Manhattan Ave <br/>Brooklyn NY</h4>
      <div className={`${styles.linksContainer}`}>
      <Link to={{ pathname: "https://goo.gl/maps/37VstfhxFq2HZr8s6" }} target="_blank" className={`${styles.detailsLink}`}>Directions</Link>
      <Link to={{ pathname: "https://www.instagram.com/lefanfare/?hl=en" }} target="_blank" className={`${styles.detailsLink}`}>Instagram</Link>
      </div>
    </div>
  )
}

export default Details