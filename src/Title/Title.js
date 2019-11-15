import React from 'react'
import './Title.css'
import { withRouter } from 'react-router-dom'

const title = (props) => {
  return (
    <div>
      <div className='title'>Crazy for Countries</div>
      <div className='sub-title'>
        {props.location.pathname === '/searchbyregion' ? 
          'Select a region ...' :
        props.location.pathname === '/searchbycurrency' ?
          'Search a currency ...' :
        props.location.pathname === '/searchbylanguage' ?
          'Search a language ...' :
          'Search a country ...'
        }
      </div>
    </div>
  )
}

export default withRouter(title) 