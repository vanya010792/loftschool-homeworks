import React, { Component } from 'react'
import { getShowInfo } from '../../api'
import './Show.css'

class Show extends Component {
    state = {
        showId: '',
        data: []
    }
    componentDidUpdate( prevProps ) {
        if( prevProps.showId !== this.props.showId ) {
            let showId = this.props.showId
            getShowInfo( showId ).then( resp => {
                let data = {
                    name: resp.name,
                    genres: resp.genres,
                    summary: resp.summary,
                    img: resp.image.original
                }
                this.setState({
                    showId,
                    data
                })
            })
        } else {
            return false
        }
    }
    render() {
        const {
            name,
            img,
            genres,
            summary
        } = this.state.data
        if(summary) {
            console.log(summary)
        }
        return(
            <React.Fragment>
                {
                    this.state.showId.length > 0
                    ?
                        <div className="show">
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
                                    genres.map( item => item + ' ' )
                                }
                            </p>
                            <p
                                className="show-text t-show-summary"
                                dangerouslySetInnerHTML={{__html: summary}}
                            >
                            </p>
                        </div>
                    : <p className='show-inforation t-show-info'>Шоу не выбрано</p>
                }
            </React.Fragment>
        )
    }
}

export default Show