import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route { ...rest } render={ props => {
            return(
                rest.isAuthorized
                ? <Component { ...props }/>
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }}
                  />
            )}
        } />
    )
}

export default withAuth(PrivateRoute);