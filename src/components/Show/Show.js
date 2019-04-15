import React, { Component } from 'react'
import { getShowInfo } from '../../api'
import './Show.css'

class Show extends Component {
    state = {
        showId: '',
        data: []
    }
    // static getDerivedStateFromProps( props, state ) {
    //     if( props.showId.length > 0 ) {
    //         console.log(props, state)
    //     }
    //     return null
    // }
    // componentDidUpdate() {
    //     console.log(1)
    // }

    render() {
        const propsShowId = this.props.showId
        console.log(propsShowId)
        // console.log('render', this.state.showId)
        // console.log('data', this.state.data)
        // if( this.props.showId ) {
        //     this.setState({
        //         showId: this.props.showId
        //     })
        // }
        // console.log(this.state.showId)
        return(
            <React.Fragment>
                {
                    !!propsShowId
                    ? <div className="show">
                        <h1>Шоу выбрано { this.props.showId }</h1>
                      </div>
                    : <p className='show-inforation t-show-info'>Шоу не выбрано</p>
                }
            </React.Fragment>
        )
    }
}

export default Show