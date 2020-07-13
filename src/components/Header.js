/******************************************
React Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';
import {
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import loading from '../images/loading.gif'; // shows during fetch request | url ("https://gph.is/1aTTYIn")

// Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NoResults from './NoResults';
import PageNotFound from './PageNotFound';

const Header = (props) => {
    return (
        <div className="container">
            <Route render={history => 
                   <React.Fragment>
                        <SearchForm {...history} fetch={props.fetch} /> 
                        <Nav {...history} fetch={props.fetch} /> 
                    </React.Fragment> } />
            {/* ↑ This route shows no matter what ↑ */}
        {/*  =======================================================================  
                    The following is rendered using Switch and conditionals                          
             =======================================================================  */}    

                {props.isloading /* ← if true... */

                ? /* ↓ LOAD GIF ↓ */
                
                <h2><img src={loading} alt="loading_gif" /></h2> 

                : /* otherwise, ↓ LOAD PHOTO-CONTAINER DIV ↓ */
                
                <div className="photo-container">
                    {/* ↓ if title of page is empty string, don't show h2 element ↓ */}
                    {props.title !== "" ? <h2>{props.title.toUpperCase()}</h2> : null}

                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/search/brown" /> {/* Redirect to /search/brown */}
                        </Route>

                        {
                            props.imgLinks.length > 3 /* if the amount of images fetched is at least 4 */

                            ?   /* ↓ RENDER the PHOTOCONTAINER component */
                            
                            <Route 
                                exact
                                path="/search/:tag" 
                                render={history => 
                                    <PhotoContainer 
                                        {...history} 
                                        imgLinks={props.imgLinks} 
                                        imgData={props.imgData} 
                                    />
                                }
                            />

                            :   /* otherwise, RENDER the NORESULTS component */
                            
                            <Route path="/search/:tag" component={NoResults} /> 
                        }

                        {/* ↓ If no paths match any other routes, RENDER the PAGE NOT FOUND component ↓ */}
                        <Route render={() => <PageNotFound pageNotFound={props.pageNotFound} />} />
                    </Switch>                                    
                </div>
                }
        </div>
    );
}

export default Header;