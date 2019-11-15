import React from 'react'
import Modal from '@material-ui/core/Modal'
import './FlagModal.css'

const flagModal = (props) => {
  return (
    <Modal open={props.open} onClose={props.close}>
      <div className='flag-modal'>
        <img className='flag' src={props.flagData ? props.flagData : null} alt ='flag' />
      </div>
    </Modal>
  )
}

export default flagModal