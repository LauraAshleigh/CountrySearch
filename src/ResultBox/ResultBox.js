import React from 'react'
import './ResultBox.css'
import RoomIcon from '@material-ui/icons/Room'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const resultBox = (props) => {
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
                {props.country.currencies.filter(c => c.name !== null).map((currency, key) => 
                    <div key={key}>{currency.symbol} - {currency.name}</div>
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
                {props.country.languages.map((language, key) =>
                    <div key={key}>{language.name}</div>
                )}
            </div>
            </PerfectScrollbar>
        </div>
    )
}

export default resultBox