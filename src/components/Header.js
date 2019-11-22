import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';

// Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NoResults from './NoResults';

const Header = (props) => {
    return (
        <div className="container">
            <Route path="*" 
                   render={history => 
                   <React.Fragment>
                        <SearchForm {...history} fetch={props.fetch} /> 
                        <Nav {...history} fetch={props.fetch} /> 
                    </React.Fragment> } />
            <div className="photo-container">
                    <h2>{props.title.toUpperCase()}</h2>
                            {/* Redirect to /search/cats */}
                                <Route exact path="/">
                                    <Redirect to="/search/cats" />
                                </Route>
                                <Route 
                                    path="/search/:tag" 
                                    render={history => 
                                        <PhotoContainer 
                                            {...history} 
                                            imgLinks={props.imgLinks} 
                                            imgData={props.imgData} 
                                        />
                                    }
                                />}
                                <Route component={NoResults} />                                        
            </div>
        </div>
    );
}

export default Header;