/******************************************
Treehouse Techdegree:
FSJS project 7 - React Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';

class PageNotFound extends React.Component {
    
    // On mount, update the tag to an empty string so title doesn't load
    componentDidMount () {
        this.props.pageNotFound("")
    }    

    render () {
        return (
            <React.Fragment>
                <h1 className="page-not-found">404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for doesn't exist or another error occurred.</p>
                <p>Go back, try a different search term, or...</p>
                <p>plug in your earbuds and listen to <span className="italics">Brown Eyed Girl.</span></p>
                <div className="video-container">
                <iframe title="Van Morrison | Brown Eyed Girl | Live | Youtube"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/TOXaSFkZzMQ" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope" 
                        allowfullscreen />
                </div>
            </React.Fragment>
        );
    }
}

export default PageNotFound;