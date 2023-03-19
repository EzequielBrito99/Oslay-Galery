import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Oslay | Galery</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/simples">simple</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tripticos">tríptico</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hambientacion">hambientación</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
