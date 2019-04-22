import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = ( type, data ) => Todo => {
    console.log( data )
    if( !!data ) {
        console.log( 'empty', data )
        return Todo
    } else {
        save( { type, data } )
        const savedData = load( { data } )
        console.log( 'savedData', savedData )
        return({ Todo, savedData })
    }
}

export default withLocalstorage;
