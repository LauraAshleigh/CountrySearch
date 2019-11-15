import React from 'react'
import './SearchBar.css'
import TextField from '@material-ui/core/TextField'
import IntegrationSelect from './IntegrationSelect/IntegrationSelect' 
import Select from '@material-ui/core/Select'
import currencies from './Currencies'
import languages from './Languages'
import { withRouter } from 'react-router-dom'

const searchBar = (props) => {
  return (
    <div className='search-bar-container'>
      {props.location.pathname === '/searchbycurrency' ?
        <IntegrationSelect 
          onHandleChange={props.onSearchByCurrency}
          selectValue={props.selectValue}
          suggestions={currencies}
          placeholder='Search a Currency'
        /> :

      props.location.pathname === '/searchbylanguage' ?
        <IntegrationSelect 
          onHandleChange={props.onSearchByLanguage}
          selectValue={props.selectValue}
          suggestions={languages}
          placeholder='Search a Language'
        /> :
      
      props.location.pathname === '/searchbyregion' ?
        <Select
          native
          className='search-bar select'
          value={props.searchString ? props.searchString : ''}
          onChange={props.onSearchByRegion}
          >
            Africa, Americas, Asia, Europe, Oceania
          <option value='' className='placeholder-text'>Select a Region</option>
          <option value={'africa'}>Africa</option>
          <option value={'americas'}>Americas</option>
          <option value={'asia'}>Asia</option>
          <option value={'europe'}>Europe</option>
          <option value={'oceania'}>Oceania</option>
        </Select> 
        
        :

        <TextField
          variant='outlined'
          className='search-bar'
          id='main-search-bar'
          name='Search'
          placeholder='Search a Country'
          value={props.searchString ? props.searchString : ''}
          onChange={props.onUpdateSearchField}
          onKeyPress={props.onSearchByCountry}
        />
      }
    </div>
  )
}

export default withRouter(searchBar) 