import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';
// import Button from "../Header/Header";

class Footer extends PureComponent {
  render() {
    const {
      sectionTitle
    } = this.props
    console.log( 'footer', this.props )
    return(
      <footer className="footer">
        { sectionTitle }
        <AuthConsumer>
          {({ isAuthorized, email }) =>
            isAuthorized ? (
              <p className="footer-message t-footer">Вы вошли как { email }</p>
            ) : (
              <p className="footer-message t-footer">Вы гость в этой системе</p>
            )
          }
        </AuthConsumer>
      </footer>
    )
  }
}

export default Footer;
