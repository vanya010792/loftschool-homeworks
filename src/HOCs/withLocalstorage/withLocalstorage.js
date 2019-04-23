import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = ( type, data ) => Todo => {
    console.log( type, data )
    if( data.length !== 0 ) {
        save( type, data )
    } else {
        let savedData = load( type )
        console.log( 'witch saved', savedData )
        return class extends Component {
            render() {
                return <Todo savedData={ savedData } />
            }
        }
    }
    let saveData = load( type )
    console.log( 'witch save', saveData )
    return class extends Component {
        render() {
            return <Todo saveData={ saveData } />
        }
    }
}

export default withLocalstorage;
