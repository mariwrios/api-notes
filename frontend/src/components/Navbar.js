import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <lu>
                <li>
                <Link to="/">
            HOME
            </Link>
                </li>
                <li>
                <Link to="/createnote">
            CREATE NOTE
            </Link>
                </li>
                <li>
                <Link to="/notelist">
            USER
            </Link>
                </li>
            </lu>
          
        
          
        </div>
    )
}

export default Navbar
