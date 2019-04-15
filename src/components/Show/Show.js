import React, { Component } from 'react'
import apiInfo from '../../api'
import './Show.css'

class Show extends Component {
    state = {
        showId: this.props.showId,
        data: false
    }
    // componentDidMount() {
    //     console.log(getShowInfo)
    // }

    render() {
        console.log(apiInfo[getShowInfo])
        console.log(this.state.showId)
        return(
            <React.Fragment>
                {
                    !!this.props.showId
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