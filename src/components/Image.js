/******************************************
React Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';

const Image = (props) => {
    return (
        <li>
            <img src={props.src} alt={props.alt} />
        </li>
    )
};

export default Image;