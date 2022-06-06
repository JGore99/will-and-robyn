import React, { useState } from "react"
import styles from './RSVPModal.module.css'

function RSVPModal ( { closeModal }) {

  const [yesChecked, setYesChecked] = useState(false)
  const [noChecked, setNoChecked] = useState(false)
  const [btnPressed, setBtnPressed] = useState(false)

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

const handleFormSubmit = (e) => {
  if (isFormValid()){
    closeModal(false)
  } else {
    setBtnPressed(true)

  }
}

  const { fullName, numberOfGuests, attending, commentsInstructions} = formData

  const isFormValid = () => {
    console.log("WORKING??", fullName, attending, numberOfGuests)
    if (fullName && attending && numberOfGuests){
      return true
    } else {
      return false
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h3 className={styles.modalTitle}>RSVP</h3>
        <form className={styles.modalForm}
          autoComplete='off'
        >
          <label className={styles.modalFormLabel}>Name
            <h4 className={
              btnPressed && !fullName ? styles.promptShown : styles.promptHidden }>*required
            </h4>
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
              <h4 className={
                btnPressed && !attending ? styles.promptShown : styles.promptHidden }>*required
              </h4>
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
              <h4 className={
                btnPressed && !numberOfGuests ? styles.promptShown : styles.promptHidden }>*required
              </h4>
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
        onClick={() => {
          handleFormSubmit()
          }}>Confirm
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
