import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = ( type, data ) => Todo => {
    return class extends Component {
        saveData = ( type, data ) => {
            save( type, data )
        }
        savedData = type => {
            return load( type )
        }
        render() {
            return(
                <Todo
                    saveData={ this.saveData }
                    savedData={ this.savedData }
                />
            )
        }
    }
}

export default withLocalstorage;
