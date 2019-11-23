import React from 'react';

const Image = (props) => {
    return (
        <li>
            <img src={props.src} alt={props.alt} />
        </li>
    )
};

export default Image;