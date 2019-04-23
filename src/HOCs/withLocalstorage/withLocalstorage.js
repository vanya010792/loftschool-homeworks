import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = ( type, data ) => Todo => {
    console.log( 'withLocalstorage', data )
    console.log( "localStorage", localStorage )
    if( !!data ) {
        save( { type, data } )
        let savedData = load({ data })
        console.log( 'test', savedData )
        return Todo
    } else {
        console.log( 'empty', data )
        return Todo
    }
}

export default withLocalstorage;
