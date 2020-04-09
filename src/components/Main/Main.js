import React from 'react'
import Navigation from '../Navigation/Navigation'
import SearchBar from '../SearchBar/SearchBar'
import Title from '../Title/Title'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <Title />
      <SearchBar />
      <Navigation />
    </div>
  )
}

export default Main