import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {

    return (
     <div>
        <ul className="navbar-twitter">
            <div className="right-side">
            <li className="title is-4"><Link to="/home">Twitter App</Link></li>
            </div>
            <div className="left-side">
            <li><Link to="/new">New Tweet</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Log in</Link></li>
            </div>
        </ul>
     </div>
    )

};

export default NavBar