import React from "react"
import logo from '../images/react-icon-small.png'

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-img" src={logo} />
            <h3 className="nav-h3">ReactFacts</h3>
            <h4 className="nav-h4">React Course - Project 1</h4>
        </nav>
    )
}