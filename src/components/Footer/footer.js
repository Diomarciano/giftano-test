import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© All right Reversed.<a className="text-green ml-2" href="https://www.nytimes.com/" target="_blank">NYT</a></span>
      </div>
    </footer>
  )
}