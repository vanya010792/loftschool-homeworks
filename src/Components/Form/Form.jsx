import React, { Component } from 'react'
import './Form.css'
import { AuthConsumer } from '../../Auth/AuthProvider'

class Form extends Component {
    render() {
        console.log(AuthConsumer)
        return(
            <form>
                Hi Form
            </form>
        )
    }
}

export default Form