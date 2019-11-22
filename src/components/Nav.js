import React from 'react';
import { 
    NavLink,
  } from 'react-router-dom';

// Components

const Nav = (props) => { 
    return (
        <React.Fragment>
            <nav className="main-nav">
                <ul>
                    {/* the arrow func in onClick calls the getPhotoData function in the App component */}
                    <li><NavLink to="/search/pizza" onClick={() => props.fetch("pizza")} >Pizza</NavLink></li>
                    <li><NavLink to="/search/doughnuts" onClick={() => props.fetch("doughnuts")} >Doughnuts</NavLink></li>
                    <li><NavLink to="/search/fries" onClick={() => props.fetch("fries")} >Fries</NavLink></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Nav;