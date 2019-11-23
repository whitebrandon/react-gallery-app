/******************************************
Treehouse Techdegree:
FSJS project 8 - React Gallery App
Name: Brandon White
Date of Last Modification: 22/11/2019
******************************************/

import React from 'react';

class SearchForm extends React.Component {

    componentDidMount() {
        /**
         * On mount, sets a timer to change the value of the search input placeholder
         * Van Halen Easter Egg
         */
        setTimeout(() => {
            this.query.placeholder = "Search";
        }, 5000)
    }

    /**
     * Prevents form from submitting,
     * pushes a new path onto the history object,
     * and calls the getPhotoData func in App before clearing the input
     * @param {Event object} evt | Synthetic onClick event
     */
    handleSubmit = async (evt) => {
        evt.preventDefault();
        this.props.history.push(`/search/${this.query.value}`);
        await this.props.fetch(this.query.value);
        this.query.value = "";
    }
    
    render () {
        return (
            <form className="search-form" onSubmit={this.handleSubmit} >
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Van Morrison" 
                    ref={(input) => this.query = input} // Stores reference to input element in this.query variable
                    required
                />
                <button 
                    type="submit" 
                    className="search-button" 
                >
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                </button>
            </form>
        );
    }
}

export default SearchForm;