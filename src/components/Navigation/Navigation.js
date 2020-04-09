import React from 'react'
import { withRouter, NavLink, Redirect } from 'react-router-dom'
import './Navigation.css'

const Navigation = props => {
  const redirect = props.location.pathname === '/' ? <Redirect to='/searchbycountry' /> : null

  const navLinks = ['Country', 'Currency', 'Language', 'Region']
  
  return (
    <div className='header'>
      <div className='search-by'>Search by:</div>
      <nav className='nav-bar'>
        {redirect}
        {navLinks.map(link => 
          <NavLink key={link} className='nav-link' to={`/searchby${link.toLowerCase()}`} exact>
            {link}
          </NavLink>
        )}
      </nav>
    </div>
  )
}

export default withRouter(Navigation)