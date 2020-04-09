import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import './FlagModal.css'

const FlagModal = props => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className='flag-modal'>
        <img className='flag' src={props.flagData} alt ='flag' />
      </div>
    </Modal>
  )
}

FlagModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  flagData: PropTypes.string
}

export default FlagModal