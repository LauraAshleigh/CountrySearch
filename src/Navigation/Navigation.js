import React from 'react'
import './Navigation.css'
import { withRouter, NavLink, Redirect } from 'react-router-dom'

const navigation = (props) => {
  const redirect = props.location.pathname === '/' ? <Redirect to='/searchbycountry' /> : null
  
  return (
    <div className='header'>
      <div className='search-by'>Search by:</div>
      <nav className='nav-bar'>
        {redirect}
        <NavLink className='nav-link' to={{pathname: '/searchbycountry'}} exact>Country</NavLink>
        <NavLink className='nav-link' to={{pathname: '/searchbycurrency'}} exact>Currency</NavLink>
        <NavLink className='nav-link' to={{pathname: '/searchbylanguage'}} exact>Language</NavLink>
        <NavLink className='nav-link' to={{pathname: '/searchbyregion'}} exact>Region</NavLink>
      </nav>
    </div>
  )
}

export default withRouter(navigation)