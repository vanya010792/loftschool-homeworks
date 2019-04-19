import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const {
      header,
      footer,
      children
    } = this.props
      const className = []
      if ( footer && header ) {
          className.push( 'main--with-footer', 'main--with-header' )
      } else if ( footer ) {
          className.push( 'main--with-footer' )
      } else if( header ) {
          className.push( 'main--with-header' )
      } else {
          console.log( 'no footer and header' )
      }
    return (
        <Fragment>
          { this.renderHeader( header ) }
          <main className={ `main ${className.join(' ')}` }>
            <SectionTitle
                children={'main'}
                className={'main__title'}
            />
            { children }
          </main>
          { this.renderFooter( footer ) }
        </Fragment>
    )
  }

  renderHeader(HeaderChild) {
    return(
      <HeaderChild
          sectionTitle={ <SectionTitle
              children={ this.props.header.name }
              className={ `${this.props.header.name.toLowerCase()}__title` }
          /> }
      />
    )
  }

  renderFooter(FooterChild) {
    return(
      <FooterChild
          sectionTitle={ <SectionTitle
              children={ this.props.footer.name }
              className={ `${this.props.footer.name.toLowerCase()}__title` }
          /> }
      />
    )
  }
}

export default Layout;
