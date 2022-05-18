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

  const { fullName, numberOfGuests, commentsInstructions} = formData

  const isFormInvalid = () => {
    return !(fullName && numberOfGuests)
  }

  return (
    <div className={`${styles.modalOverlay}`}>
      <div className={`${styles.modalContainer}`}>
        <h3 className={`${styles.modalTitle}`}>RSVP</h3>
        {/* <h4 className={`${styles.modalContent}`}>the wedding reception of</h4>
        <h4 className={`${styles.modalNames}`}>WILL & ROBYN</h4>
        <h4 className={`${styles.modalTime}`}>SATURDAY, OCTOBER 22, 2022 AT 6:00 PM</h4>
        <h4 className={`${styles.modalLocation}`}>Fanfare</h4>
        <h4 className={`${styles.modalAddress}`}>1103 Manhattan Ave, <br/>Brooklyn, NY 11222</h4> */}
        <form className={`${styles.modalForm}`}
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
          <div className={`${styles.modalAttendingContainer}`}>Attending
            <label>Yes
              <input
                type='radio'
                value={true}
                name='yes'
                onChange={handleChange}
                />
            </label>
            <label>No
              <input
                type='radio'
                value={false}
                name='no'
                onChange={handleChange}
                />
            </label> 
          </div> 
          <label>Number of guests
            <input
              type='number'
              value={numberOfGuests}
              name='number of guests'
              onChange={handleChange}
            />
          </label>
          <label>Comments / Special Instructions
            <textarea
              value={commentsInstructions}
              name='comments'
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
