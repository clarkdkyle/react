import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <h1>TEK News</h1>
            <ul>
                <li><Link to="/" className="NavBar" >Home</Link></li>
                <li><Link to="/Sports" className="NavBar" >Sports</Link></li>
                <li><Link to="/Business" className="NavBar" >Business</Link></li>
                <li><Link to="/Entertainment" className="NavBar" >Entertainment</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;