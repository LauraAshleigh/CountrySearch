import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { CountryContext } from '../../context/country-context'
import { ErrorContext } from '../../context/error-context'
import { LoadingContext } from '../../context/loading-context'
import IntegrationSelect from './IntegrationSelect/IntegrationSelect' 
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import { get } from '../../functions/apiCalls'
import currencies from './Currencies'
import languages from './Languages'
import './SearchBar.css'

const SearchBar = props => {
  const country = useContext(CountryContext)
  const error = useContext(ErrorContext)
  const loading = useContext(LoadingContext)

  const [searchString, setSearchString] = useState('')

  const onUpdateSearchField = (e) => setSearchString(e.target.value)

  const onSearchByCountry = async (e) => {
    if(searchString.trim() !== '' && e.key === 'Enter') {
      loading.setLoading(true)
      const results = await get(`name/${searchString}`)
      if(results.error) error.setError(true)
      else country.setCountryData(results)
      loading.setLoading(false)
    }
  }

  const onSearchByCurrency = async (e) => {
    loading.setLoading(true)
    const results = await get(`currency/${e.value}`)
    if(results.error) error.setError(true)
    else country.setCountryData(results)
    loading.setLoading(false)
  }

  const onSearchByRegion = async (e) => {
    setSearchString(e.target.value)
    loading.setLoading(true)
    const results = await get(`region/${e.target.value}`)
    if(results.error) error.setError(true)
    else country.setCountryData(results)
    loading.setLoading(false)
  }

  const onSearchByLanguage = async (e) => {
    loading.setLoading(true)
    const results = await get(`lang/${e.value}`)
    if(results.error) error.setError(true)
    else country.setCountryData(results)
    loading.setLoading(false)
  }

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <div className='search-bar-container'>
      {props.location.pathname === '/searchbycurrency' ?
        <IntegrationSelect 
          onHandleChange={onSearchByCurrency}
          suggestions={currencies}
          placeholder='Search a Currency'
        /> 
        : props.location.pathname === '/searchbylanguage' ?
        <IntegrationSelect 
          onHandleChange={onSearchByLanguage}
          suggestions={languages}
          placeholder='Search a Language'
        /> 
        : props.location.pathname === '/searchbyregion' ?
        <Select
          native
          className='search-bar select'
          value={searchString}
          onChange={onSearchByRegion}
        >
          <option value='' className='placeholder-text'>Select a Region</option>
          {regions.map(region => <option key={region} value={region.toLowerCase()}>{region}</option>)}
        </Select> 
        
        :

        <TextField
          variant='outlined'
          className='search-bar'
          id='main-search-bar'
          name='Search'
          placeholder='Search a Country'
          value={searchString}
          onChange={onUpdateSearchField}
          onKeyPress={onSearchByCountry}
        />
      }
    </div>
  )
}

export default withRouter(SearchBar) 