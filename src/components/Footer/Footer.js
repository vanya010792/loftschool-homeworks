import React, { PureComponent } from 'react';
// import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    const {
      sectionTitle
    } = this.props
    return(
      <footer className="footer">
        { sectionTitle }
        <p className="footer-message t-footer">Вы гость в этой системе</p>
      </footer>
    )
  }
}

export default Footer;
