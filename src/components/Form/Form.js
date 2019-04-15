import React, { Component } from 'react'
import './Form.css'
import bondImg from './assets/bond_approve.jpg'
import FormInput from './FormInput/FormInput'
import FormData from './FormData/FormData'

const formData = [ ...FormData ]
const formDataLen = formData.length

class Form extends Component {
    state = {
        successValue: {
            firstname: 'James',
            lastname: 'Bond',
            password: '007'
        },
        formValid: false,
        firstnameValue: '',
        lastnameValue: '',
        passwordValue: '',
        firstnameValid: '',
        lastnameValid: '',
        passwordValid: ''
    }
    formSubmit = e => {
        e.preventDefault()
        for ( let a = 0; a < formDataLen; a++ ) {
            let inputName = formData[a].htmlFor + 'Value'
            let inputValid = formData[a].htmlFor + 'Valid'
            if( this.state[ inputName ] === '' ) {
                this.setState({
                    [ inputValid ]: 0
                })
            } else if ( this.state[ inputName ] !== this.state.successValue[ formData[a].htmlFor ] ) {
                this.setState({
                    [ inputValid ]: 1
                })
            } else {
                this.setState({
                    [ inputValid ]: 2
                })
            }
        }
        for( let a = 0; a < formDataLen; a++ ) {
            let inputName = formData[a].htmlFor + 'Valid'
            if ( this.state[ inputName ] !== 2 ) {
                return false
            }
        }
        this.setState({
            formValid: true
        })
    }
    inputValue = e => {
        for( let a = 0; a < formDataLen; a++ ) {
            let inputValid = formData[a].htmlFor + 'Valid'
            if( this.state[ inputValid ] !== 2 ) {
                this.setState({
                    [ inputValid ]: ''
                })
            }
        }
        let inputName = e.target.name + 'Value'
        let inputValid = e.target.name + 'Valid'
        let inpVal = e.target.value
        this.setState({
            [ inputName ]: inpVal
        })
        if( inpVal === this.state.successValue[ e.target.name ] ) {
            this.setState({
                [ inputValid ]: 2
            })
        }
    }
    render() {
        return(
            <div className="app-container">
                {
                    this.state.formValid
                    ? <img
                        src={ bondImg }
                        alt='bond approve'
                        className='t-bond-image'/>
                    : <form className="form" onSubmit={this.formSubmit}>
                        <h1>Введите свои данные, агент</h1>
                        {
                            formData.map(item => {
                                let inputVal = item.htmlFor + 'Value'
                                let inputValid = item.htmlFor + 'Valid'
                                return (
                                    <FormInput
                                        key={ item.htmlFor }
                                        htmlFor={ item.htmlFor }
                                        inputTitle={ item.inputTitle }
                                        type={ item.type }
                                        inputClassName={ item.inputClassName }
                                        inputErrorClassName={ item.inputErrorClassName }
                                        inputErrorValue={ item.inputErrorValue }
                                        inputErrorValueEmpty={ item.inputErrorValueEmpty }
                                        inputValid={ this.state[ inputValid ] }
                                        inputVal={ this.state[ inputVal ] }
                                        handleChangeInputValue={ this.inputValue }
                                    />
                                )
                            })
                        }
                        <div className="form__buttons">
                            <input type="submit" className="button t-submit" value='Проверить'/>
                        </div>
                    </form>
                }
            </div>
        )
    }
}

export default Form