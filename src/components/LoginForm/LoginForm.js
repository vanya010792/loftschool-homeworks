// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react'
import classes from './LoginForm.module.css'
import { withAuth } from '../../context/Auth/Auth'
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {
    state = {
        emailValue: '',
        passwordValue: ''
    }
    handlerChangeInput = evt => {
        console.log(evt.target.name)
        let nameInput = evt.target.name + 'Value'
        this.setState({
            [ nameInput ]: evt.target.value
        })
    }
    handlerSubmit = evt => {
        evt.preventDefault()
        const { authorize } = this.props
        authorize( this.state.emailValue, this.state.passwordValue )
    }
    render() {
        const { authError, isAuthorized } = this.props
        return(
            <div className={ classes.bg }>
                <form
                    className={ `${classes.form} t-form` }
                    onSubmit={ this.handlerSubmit }
                >
                    <p>
                        <label htmlFor='email'>
                            <span className={ classes.labelText }>Почта</span>
                        </label>
                        <input
                            className={ `${classes.input} t-input-email` }
                            type='text'
                            name='email'
                            value={ this.state.emailValue}
                            onChange={ this.handlerChangeInput }
                        />
                    </p>
                    <p>
                        <label htmlFor='password'>
                            <span className={ classes.labelText }>Почта</span>
                        </label>
                        <input
                            className={ `${classes.input} t-input-password` }
                            type='password'
                            name='password'
                            value={ this.state.passwordValue }
                            onChange={ this.handlerChangeInput }
                        />
                    </p>
                    {
                        authError !== ''
                        ? <p className={ classes.error }>{ authError }</p>
                        : null
                    }
                    <div className={ classes.buttons }>
                        <button
                            className={ `${classes.button} t-login` }
                        >
                            Войти
                        </button>
                    </div>
                    {
                        isAuthorized
                        ? <Redirect from='/login' to='/app' />
                        : null
                    }
                </form>
            </div>
        )
    }
}

export default withAuth( LoginForm )
