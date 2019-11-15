import React from 'react'
import './Main.css'
import Navigation from '../Navigation/Navigation'
import Title from '../Title/Title'
import SearchBar from '../SearchBar/SearchBar'


const main = (props) => {
  return (
    <div className='main'>
      <Title />
      <SearchBar 
        searchString={props.searchString} 
        selectValue={props.selectValue}
        onUpdateSearchField={props.onUpdateSearchField}
        onHandleSelectChange={props.onHandleSelectChange}
        onSearchByCountry={props.onSearchByCountry}
        onSearchByCurrency={props.onSearchByCurrency}
        onSearchByRegion={props.onSearchByRegion}
        onSearchByLanguage={props.onSearchByLanguage}
      />
      <Navigation />
    </div>
  )
}

export default main