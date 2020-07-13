/******************************************
eact Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';
import { 
    NavLink,
  } from 'react-router-dom';

const Nav = (props) => { 
    return (
        <React.Fragment>
            <nav className="main-nav">
                <ul>
                    {/* the arrow func in onClick calls the getPhotoData function in the App component */}
                    <li><NavLink to="/search/brown" onClick={() => props.fetch("brown")} >Brown</NavLink></li>
                    <li><NavLink to="/search/eyed" onClick={() => props.fetch("eyed")} >Eyed</NavLink></li>
                    <li><NavLink to="/search/girl" onClick={() => props.fetch("girl")} >Girl</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Nav;