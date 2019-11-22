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
                <p>Go back or try a different search term.</p>
            </React.Fragment>
        );
    }
}

export default PageNotFound;