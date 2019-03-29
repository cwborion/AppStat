import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='add-job'>Add Job</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li>
        <NavLink to='/' className='btn btn-floating'>
          CB
        </NavLink>
      </li>
    </ul>
  )
}

export default SignedInLinks