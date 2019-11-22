import React from 'react';
import Image from './Image';

const PhotoContainer = (props) => {
    return (
            <ul>
                {props.imgLinks.map((item, i) => <Image src={item} key={props.imgData[i].id} /> )}
            </ul>
    );
}

export default PhotoContainer;

// this.props.url.map((item, i) => <Image url={item} key={this.props.image[i].id} /> )