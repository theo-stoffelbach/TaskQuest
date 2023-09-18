import React from 'react';
import { Link } from "react-router-dom";
import "../../Style/navbar.css"

function Navbar(props) {
    return (
        <nav>
            <div id="links">
                <Link className="link" to="/"> Home </Link>
                <Link className="link" to="/equipe"> Equipe </Link>
            </div>
        </nav>
    );
}

export default Navbar;