/******************************************
Treehouse Techdegree:
FSJS project 8 - React Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';
import Image from './Image';

const PhotoContainer = (props) => {
    return (
            <ul>
                {props.imgLinks.map((item, i) => <Image 
                                                    src={item} 
                                                    key={props.imgData[i].id} 
                                                    alt={props.imgData[i].title} 
                                                 /> )}
            </ul>
    );
}

export default PhotoContainer;