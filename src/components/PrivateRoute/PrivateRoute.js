import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
// import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
    render() {
        return(
            <h1>PrivateRout</h1>
        )
    }
}

// export default withAuth(PrivateRoute);
export default PrivateRoute