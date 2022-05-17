import React, { useState } from "react"
import styles from './RSVPModal.module.css'

function RSVPModal ( { closeModal }) {

  const [formData, setFormData] = useState({
    fullName: '',
    numberOfGuests: null,
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const { fullName, numberOfGuests} = formData

  const isFormInvalid = () => {
    return !(fullName && numberOfGuests)
  }

  return (
    <div className={`${styles.modalOverlay}`}>
      <div className={`${styles.modalContainer}`}>
        <h3 className={`${styles.modalTitle}`}>RSVP</h3>
        <h4 className={`${styles.modalContent}`}>the wedding reception of</h4>
        <h4 className={`${styles.modalNames}`}>WILL & ROBYN</h4>
        <h4 className={`${styles.modalTime}`}>00:00PM 00/00/2022</h4>
        <h4 className={`${styles.modalLocation}`}>Fanfare</h4>
        <h4 className={`${styles.modalAddress}`}>1103 Manhattan Ave, <br/>Brooklyn, NY 11222</h4>
        <form
          autoComplete='off'
        >
          <label>Name
            <input
              type='text'
              value={fullName}
              name='name'
              onChange={handleChange}
            />
          </label>
          <label>Number of guests
            <input
              type='number'
              value={numberOfGuests}
              name='number of guests'
              onChange={handleChange}
            />
          </label>
        </form>
      <button 
        disabled={isFormInvalid()}
        onClick={() => {
          closeModal(false)}}>Confirm
      </button>
      </div>
    </div>
  )
}

export default RSVPModal
