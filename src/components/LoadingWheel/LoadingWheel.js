import React, { useContext } from 'react'
import { LoadingContext } from '../../context/loading-context'
import globe from './globe.png'
import './LoadingWheel.css'

const LoadingWheel = () => {
  const loading = useContext(LoadingContext)

  return (
    <div className='loading-wheel-container'>
      <img className='loading-wheel' src={globe} alt='loading' style={{display: loading.loading ? 'block' : 'none'}} />
    </div>
  )
}

export default LoadingWheel