import React, { Fragment, Component } from 'react'
import './Layout.css'

class Layout extends Component {
    render() {
        const {
            children
        } = this.props
        return(
            <Fragment>
                { children }
            </Fragment>
        )
    }
}

export default Layout