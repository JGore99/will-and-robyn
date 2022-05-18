import React from 'react'
import styles from './Lodging.module.css'
import LodgingCard from '../../components/LocationCard/LocationCard'
import LodgingList from '../../components/LocationList/LocationList'

const Lodging = () => {
  return (
    <div className={`${styles.lodgingContainer}`}>
      <h1 className='pageTitle'>Where to stay</h1>
      <div className={`${styles.locationCardContainer}`}>
      {LodgingList.map((location, index) => {
        return (
          <>
          <LodgingCard 
            key={location.id}
            location={location}
            />
          </>
        )
      })}
      </div>
    </div>
  )
}


export default Lodging