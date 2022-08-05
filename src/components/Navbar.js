import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <Link to="/" className="logo">Fav Plan</Link>
            <ul className="navlinks">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link  className="nav-link" to="/mealplan">Favourite Meal Plan</Link></li>
            </ul>
        </nav>
    </div>
  )
}
