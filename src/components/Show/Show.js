import React, { Component } from 'react'
import './Show.css'
import { getShowInfo } from '../../api'

class Show extends Component {
    state = {
        showId: '',
        data: {}
    }
    componentDidMount() {
        if( this.state.showId !== this.props.showId ) {
            let showId = this.props.showId
            getShowInfo( showId ).then( response => {
                let data = {
                    name: response.name,
                    genres: response.genres,
                    summary: response.summary,
                    img: response.image.original
                }
                this.setState({
                    showId,
                    data
                })
            })
        }
    }

    render() {
        const {
            name,
            img,
            genres,
            summary
        } = this.state.data
        return(
            <React.Fragment>
                {
                    this.state.data.name
                        ? <div className="show">
                            <img
                                className="show-image"
                                src={ img }
                                alt="House"
                            />
                            <h2 className="show-label t-show-name">
                                { name }
                            </h2>
                            <p className="show-text t-show-genre">
                                <b>Жанр: </b>
                                {
                                    genres.join( ', ' )
                                }
                            </p>
                            <p
                                className="show-text t-show-summary"
                                dangerouslySetInnerHTML={{__html: summary.substring( 3, summary.length - 4 ) }}
                            >
                            </p>
                        </div>
                        :  <p className="show-inforation t-show-info">Шоу не выбрано</p>
                }
            </React.Fragment>
        )
    }
}

export default Show