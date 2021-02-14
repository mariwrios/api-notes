import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar__container">
      <h1>Note app</h1>
      <ul className="navbar__ul">
        <li>
          <Link className="navbar__ul-link" to="/">
            Notes
          </Link>
        </li>
        <li>
          <Link className="navbar__ul-link" to="/create">
            Ceates Notes
          </Link>
        </li>
        <li>
          <Link className="navbar__ul-link" to="/user">
            User
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
