import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
// import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    const { sectionTitle } = this.props
    return(
      <header className="header">
        { sectionTitle }
        <div className="header__content"></div>
      </header>
    )
  }
}

export default Header;
