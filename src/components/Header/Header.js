import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';
// import Congratulations from "../App/App";

class Header extends PureComponent {
  render() {
    const {
      sectionTitle
    } = this.props
    console.log( 'AuthConsumer', AuthConsumer, this.context )
    return(
      <header className="header">
        { sectionTitle }
        <AuthConsumer>
          {({ isAuthorized, email, logout }) =>
            isAuthorized ? (
              <div className="header-menu">
                <p className="header-menu__email header-email t-header-email">
                  { email }
                </p>
                <Button
                    className={ 'header-menu__button t-logout' }
                    onClick={ logout }
                >
                  Выйти
                </Button>
              </div>
            ) : (
              null
            )
          }
        </AuthConsumer>
      </header>
    )
  }
}

export default Header;
