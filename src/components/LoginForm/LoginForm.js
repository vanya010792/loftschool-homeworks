// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react'
import './LoginForm.module.css'
import { withAuth } from '../../context/Auth/Auth'

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
        const { authError } = this.props
        return(
            <div className='bg'>
                <form action="" className="form">
                    {
                        inputData.map( item => {
                            let nameState = item.name + 'Value'
                            return(
                                <p key={ item.name }>
                                    <label htmlFor={ item.name }>
                                        <span className="labelText">Почта</span>
                                    </label>
                                    <input
                                        className="input"
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
                        ? <p className='error'>{ authError }</p>
                        : null
                    }
                    <div className="buttons">
                        <button
                            className="button"
                            onClick={ this.handlerSubmit }
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withAuth( LoginForm )
