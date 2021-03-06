import React, { useState } from "react"
import styles from './Landing.module.css'
import RSVPModal from "../../components/RSVPModal/RSVPModal"
import and from '../../images/and.png'
import rW01 from '../../images/FullSizeR (2).jpg'
import rW02 from '../../images/FullSizeR (3).jpg'
import rW03 from '../../images/FullSizeR (4).jpg'

const Landing = () => {

  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.landingContainer}>
      {modalIsOpen && <RSVPModal isOpen={modalIsOpen}
        closeModal={setIsOpen}
        contentLabel="Example Modal"/>} 
      <div className={styles.landingBackground}>
        <div className={styles.backgroundSphere}></div>
        <div className={styles.landingBackgroundSquares}>
          <div className={styles.backgroundCrop}></div>
          <div className={styles.backgroundSquare}></div>
          <div className={styles.backgroundCrop}></div>
        </div> 
      </div>
      <div className={styles.landingContent}>
        <div className={styles.landingText}>
          <h2>WILL</h2>
          <img className={styles.andImage} src={and} alt="and" />
          <h2>ROBYN</h2>
        </div>
        <div className={styles.landingImageGrid}>
          <img className={styles.landingImageLg} src={rW02} alt="photo02" />
          <img className={styles.landingImagesm01} src={rW03} alt="photo03" />
          <img className={styles.landingImagesm02} src={rW01} alt="photo01"/>
        </div>
        <h4 className={styles.landingDetails}>SATURDAY, OCTOBER 22, 2022 <br/>6:00 PM<br/>IN BROOKLYN NY</h4>
        <button className='button-bg' 
          onClick={() => {
            setIsOpen(true)
        }}>
          RSVP
        </button>
      </div>
    </div>
  )
}

export default Landing