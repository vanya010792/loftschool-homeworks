import React, { Fragment, Component } from 'react'
import './Layout.css'

class Layout extends Component {
    renderHeader( Header ) {
        return <Header />
    }
    renderFooter( Header ) {
        return <Header />
    }
    render() {
        const {
            children,
            footer,
            header
        } = this.props
        return(
            <Fragment>
                { this.renderHeader( header ) }
                { children }
                { this.renderFooter( footer ) }
            </Fragment>
        )
    }
}

export default Layout