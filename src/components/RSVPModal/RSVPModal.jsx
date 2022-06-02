import React, { useState } from "react"
import styles from './RSVPModal.module.css'

function RSVPModal ( { closeModal }) {

  const [yesChecked, setYesChecked] = useState(false)
  const [noChecked, setNoChecked] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const [formData, setFormData] = useState({
    fullName: '',
    numberOfGuests: null,
    attending: '',
    commentsInstructions: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheck = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleYes = (e) => {
    setYesChecked(true)
    setNoChecked(false)
  }

  const handleNo = (e) => {
    setYesChecked(false)
    setNoChecked(true)
  }

  const { fullName, numberOfGuests, attending, commentsInstructions} = formData

  const isFormInvalid = () => {
    // if (fullName && attending){
    //   setBtnDisabled(false)
    //   return (fullName && attending )
    // } else {
    //   setBtnDisabled(true)
    //   return !(fullName && attending )
    // }
    return !(fullName && attending )
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.modalTitle}>RSVP</h3>
        <form className={styles.modalForm}
          autoComplete='off'
        >
          <label className={styles.modalFormLabel}>Name
            <input className={styles.modalFormInput}
              type='text'
              required
              value={fullName}
              name='fullName'
              onChange={handleChange}
            />
          </label> 
          <div className={styles.attendingGuestsContainer}>
            <div className={styles.modalAttendingContainer}>
              <h4 className={styles.modalAttendingLabel}>Attending?</h4>
              <div className={styles.modalRadioContainer}>
                <label className={
                  yesChecked ? `${styles.radioYesChecked}` : `${styles.radioYes} `}
                >Yes
                  <input className={styles.modalRadioBtn}
                    type='radio'
                    value={true}
                    name='attending'
                    onChange={(e) => {
                      handleCheck(e)
                      handleYes(e)
                    }}
                    />
                </label>
                <label className={
                  noChecked ? `${styles.radioNoChecked}` : `${styles.radioNo} `}>No
                  <input className={styles.modalRadioBtn}
                    type='radio'
                    value={false}
                    setNoChecked={true}
                    setYesChecked={false}
                    name='attending'
                    onChange={(e) => {
                      handleCheck(e)
                      handleNo(e)
                    }}
                    />
                </label> 
              </div>
            </div> 
            <label className={styles.modalGuestLabel}>Number of guests
              <input className={styles.modalGuestInput}
                type='number'
                required
                value={numberOfGuests}
                name='numberOfGuests'
                onChange={handleChange}
              />
            </label>
          </div>
          <label className={styles.modalSpecialLabel}>Comments / Special Instructions
            <textarea className={`${styles.modalFormInput} ${styles.modalTextArea}`}
              value={commentsInstructions}
              name='commentsInstructions'
              onChange={handleChange}
            />
          </label>
        </form>
      <button className="button-bg"
        disabled={isFormInvalid()}
        onClick={() => {
          closeModal(false)}}>Confirm
      </button>
      {/* className={disabled ? "button-ds" : "button-bg" } */}

    <button 
    className={styles.closeModal}
        onClick={() => {
          closeModal(false)}}>X
      </button>
      </div>
    </div>
  )
}

export default RSVPModal
