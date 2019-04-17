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
    const classes = (header, footer) => {
      if( !!header ) {
        return 'main--with-header'
      } else if( !!footer ) {
        return 'main--with-footer'
      } else if( !!header && !!footer ) {
        return 'main--with-header main--with-footer'
      } else {
        return null
      }
    }
    return (
        <Fragment>
          { this.renderHeader( header ) }
          <main className={ `main ${classes}` }>
            <SectionTitle />
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
              children={this.props.header.name}
              className={ `${this.props.header.name.toLowerCase()}_title` }
          /> }
      />
    )
  }

  renderFooter(FooterChild) {
    return(
      <FooterChild
          sectionTitle={ <SectionTitle
              children={this.props.footer.name}
              className={ `${this.props.footer.name.toLowerCase()}_title` }
          /> }
      />
    )
  }
}

export default Layout;
