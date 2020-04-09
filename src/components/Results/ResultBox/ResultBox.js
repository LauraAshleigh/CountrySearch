import React from 'react'
import PropTypes from 'prop-types'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import RoomIcon from '@material-ui/icons/Room'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './ResultBox.css'

const numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const ResultBox = props => {
  return (
    <div className='result-box'>
      <PerfectScrollbar>
      <div className='search-result'>
        {props.country.name}
        <div className='flag-container' onClick={props.onFlagClick} name={props.country.name}>
          <img className='flag' src={props.country.flag} alt ='flag' />
        </div>
      </div>
      <div className='icon-container'>
        <RoomIcon /> 
        <div className='box-sub-title'>Geography</div>
      </div>
      <div>
        <div>{`Capital: ${props.country.capital}`}</div>
        <div>{`Region: ${props.country.region}`}</div>
        <div>{`Sub-Region: ${props.country.subregion}`}</div>
      </div>
      <div className='icon-container'>
        <AttachMoneyIcon />
        <div className='box-sub-title'>Currencies</div>
      </div>
      <div>
        {props.country.currencies.filter(c => c.name !== null).map(currency => 
          <div key={currency.code}>{currency.symbol} - {currency.name}</div>
        )}
      </div>
      <div className='icon-container'>
        <PeopleIcon />
        <div className='box-sub-title'>Population</div>
      </div>
      <div>
        <div>{numberWithCommas(props.country.population)}</div>
      </div>
      <div className='icon-container'>
        <ChatIcon />
        <div className='box-sub-title'>Languages</div>
      </div>
      <div>
        {props.country.languages.map(language =>
          <div key={language.name}>{language.name}</div>
        )}
      </div>
      </PerfectScrollbar>
    </div>
  )
}

ResultBox.propTypes = {
  country: PropTypes.object.isRequired,
  onFlagClick: PropTypes.func.isRequired
}

export default ResultBox