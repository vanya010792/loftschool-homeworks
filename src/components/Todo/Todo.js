import React, { Fragment, PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';
import {save} from "../../localstorage";

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  // getId() {
  //   const { savedData } = this.props;
  //   const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
  //   return biggest + 1;
  // }
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  createNewRecordByEnter = () => {
    const { savedData } = this.props
    const dataSave = this.state.inputValue
    save( 'todo-app', [ dataSave ] )
    const dataLoad = savedData( 'todo-app' )
    const result = [ ...dataLoad, ...dataSave ]
    // !!dataLoad ? result = [ ...dataLoad, ...dataSave ] : result = [ ...dataSave ]
    this.setState({
      inputValue: ''
    })
    return result
  }
  toggleRecordComplete = event => {
    console.log( 'toggleRecordComplete', event.target )
  }

  // createNewRecord = () => {
  //   const { saveData } = this.props
  //   const data = [ this.state.inputValue ]
  //   saveData( 'todo-app', data )
  //   console.log( 'createNewRecord', saveData, data, window.localStorage )
  //   this.setState({
  //     inputValue: ''
  //   })
  // }

  render() {
    return(
      <Card
        children={ this.renderEmptyRecord() }
        title={ 'Список дел' }
      />
    )
  }

  renderEmptyRecord() {
    const { savedData, saveData } = this.props
    return(
      <div className="todo t-todo-list">
        <div className="todo-item todo-item-new">
          <input
            className="todo-input t-input"
            placeholder="Введите задачу"
            value={ this.state.inputValue }
            onChange={ this.handleChange }
          />
          <span
              className="plus t-plus"
              // onClick={ this.createNewRecord }
              onClick={ this.createNewRecordByEnter }
          >+</span>
        </div>
        { this.renderRecord( this.renderEmptyRecord() ) }
      </div>
    )
  }

  renderRecord = record => {
    return(
      <Fragment>
        {
          record.map( item => {
            return(
              <div
                className="todo-item t-todo"
                key={ item.index }
              >
                <p className="todo-item__text">{ item }</p>
                <span
                  className="todo-item__flag t-todo-complete-flag"
                  data-todo-id={ item.index }
                  onClick={ this.toggleRecordComplete }
                >
                  [  ]
              </span>
              </div>
            )
          })
        }
      </Fragment>
    )
  };
}

export default withLocalstorage('todo-app', [])(Todo)