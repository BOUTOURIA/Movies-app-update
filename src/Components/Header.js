import React from 'react'
import { BrowserRouter as Router, Route,  Link } from "react-router-dom";
export default function () {
    return (
        <div className="nav-container">
            <nav className="Navbar">
                <Router>
                <ul className="navbar-header">
                  <Link to='/'>  <li>Home</li></Link>
                    <li>Back</li>

                </ul>
                </Router>
            </nav>
        </div>
    )
}
