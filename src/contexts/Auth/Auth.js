import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  }
  authorize = ( email, password ) => {
    if( email === 'stu@dent.com' && password === 123 ) {
      this.setState({
        isAuthorized: !this.state.isAuthorized,
        email,
        authorizeError: ''
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }
  logout = () => {
    this.setState({
      isAuthorized: false
    })
  }
  getProviderValue = () => {
    return {
      email: '',
      isAuthorized: '',
      authorizeError: '',
      authorize: '',
      logout: ''
    }
  }
  render() {
    console.log( 'auth', this.props )
    const { children } = this.props;
    return (
      <Provider
          value='
            isAuthorized={ this.state.isAuthorized },
            authorize={ this.authorize },
            authorizeError={ this.state.authorizeError }
          '

      >
        { children }
      </Provider>
    )
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
