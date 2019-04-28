// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react'
import classes from './LoginForm.module.css'
import { withAuth } from '../../context/Auth/Auth'
import { Redirect } from 'react-router-dom'

const inputData = [
    {
        name: 'email',
        type: 'text'
    },
    {
        name: 'password',
        type: 'password'
    }
]

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
                    className={ classes.form }
                    onSubmit={ this.handlerSubmit }
                >
                    {
                        inputData.map( item => {
                            let nameState = item.name + 'Value'
                            return(
                                <p key={ item.name }>
                                    <label htmlFor={ item.name }>
                                        <span className={ classes.labelText }>Почта</span>
                                    </label>
                                    <input
                                        className={ classes.input }
                                        type={ item.type }
                                        name={ item.name }
                                        value={ this.state[ nameState ]}
                                        onChange={ this.handlerChangeInput }
                                    />
                                </p>
                            )
                        })
                    }
                    {
                        authError !== ''
                        ? <p className={ classes.error }>{ authError }</p>
                        : null
                    }
                    <div className={ classes.buttons }>
                        <button
                            className={ classes.button }
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
