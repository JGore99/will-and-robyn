import React, { useState } from 'react'
import styles from './Slideshow.module.css'
import locationPhotos from '../LocationPhotos/LocationPhotos'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'

const Slideshow = () => {
  const [current, setCurrent] = useState(0)
  const length = locationPhotos.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(locationPhotos) || locationPhotos.length <= 0) {
    return null
  }

  return (
    <div className={`${styles.slideShowContainer}`}>
      {locationPhotos.map((photo, index) => {
        return (
          <div
            className={index === current ? `${styles.activeSlide}` : `${styles.slide}`}
            key={photo.id}  
          >
            {index === current && (
              <>
                <img className={`${styles.slideImage}`} src={ photo.image } alt={photo.alt} />
              </>
            )}
          </div>
        );
      })}
      <div className={styles.slideControls}>
        <MdOutlineArrowBackIosNew className={`${styles.arrow} ${styles.leftArrow} ${styles.slideControlBtn}`} onClick={prevSlide} />
        <MdOutlineArrowForwardIos className={`${styles.arrow} ${styles.rightArrow} ${styles.slideControlBtn}`} onClick={nextSlide} />
      </div>
    </div>
  )
}

export default Slideshow