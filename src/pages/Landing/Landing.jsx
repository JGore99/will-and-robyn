import React from 'react'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      Landing Page
      <button className='button-bg'>
        RSVP
      </button>
    </div>
  )
}

export default Landing