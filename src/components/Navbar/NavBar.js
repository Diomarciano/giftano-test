import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="collapse navbar-collapse">
        <div className="col-md-6 offset-md-3">
          <ul className="navbar-nav" style={{ justifyContent: 'center' }}>
            <li className="nav-item active">
              <NavLink exact activeClassName="navbar-item" to='/'>Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}