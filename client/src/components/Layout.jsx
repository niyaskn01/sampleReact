import React from 'react'
import { NavLink } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
      <NavLink style={{margin:'50px'}} to='/'>Home</NavLink>
      <NavLink style={{margin:'50px'}} to='/about'>about</NavLink>
      <NavLink style={{margin:'50px'}} to='/contact'>Contact</NavLink>
      {children}
    </div>
  )
}

export default Layout