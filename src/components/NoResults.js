import React from 'react';

const NoResults = () => {
    return (
        <React.Fragment>
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>Your search did not return any results. Please try again.</p>
            </li>
        </React.Fragment>
    );
}

export default NoResults;