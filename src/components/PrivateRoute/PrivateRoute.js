import React from 'react';
// import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
    console.log( ...rest )
    return(
        <Route
            { ...rest }
            render={ props=>
                localStorage.getItem('authToken')
                ? <Component { ...props } />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }}
                />
            }
        />
    )
}

// export default withAuth(PrivateRoute);
export default PrivateRoute