import React, { Component } from 'react'

const { Provider, Consumer: AuthConsumer } = React.createContext()

class AuthProvider extends Component {
    state = {
        email: '',
        isAuthorized: false
    }
    logout = () => {
        this.setState({
            isAuthorized: !this.state.isAuthorized
        })
    }
    render() {
        const {
            children
        } = this.props
        return(
            <Provider
                value={{
                    email: this.state.email,
                    isAuthorized: this.state.isAuthorized,
                    logout: this.logout
                }}
            >
                { children }
            </Provider>
        )
    }
}

export { AuthProvider, AuthConsumer }