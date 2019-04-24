import React, { Fragment, PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';
// import {save} from "../../localstorage";

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  toggleRecordComplete = event => {
    console.log( event.target.innerHTML )
    if( event.target.innerHTML === '[  ]' ) {
      console.log(1)
      event.target.innerHTML = '[x]'
    } else {
      console.log(2)
      event.target.innerHTML = '[  ]'
    }

  }
  // getId() {
  //   const { savedData } = this.props;
  //   const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
  //   return biggest + 1;
  // }
  createNewRecordByEnter = () => {
    const { saveData, savedData } = this.props
    const dataLoad = savedData( 'todo-app' )
    saveData( 'todo-app', [ ...dataLoad, this.state.inputValue ] )
    this.createNewRecord()
    this.setState({
      inputValue: ''
    })
  }
  createNewRecord = () => {
    const { savedData } = this.props
    return savedData( 'todo-app' )
  }
  render() {
    return(
      <Card
        children={ this.renderEmptyRecord() }
        title={ 'Список дел' }
      />
    )
  }

  renderEmptyRecord() {
    return(
      <div className="todo t-todo-list">
        <div
            className="todo-item todo-item-new"
        >
          <input
            className="todo-input t-input"
            placeholder="Введите задачу"
            value={ this.state.inputValue }
            onChange={ this.handleChange }
          />
          <span
            className="plus t-plus"
            onClick={ this.createNewRecordByEnter }
          >+</span>
        </div>
        { this.renderRecord( this.createNewRecord() ) }
      </div>
    )
  }

  renderRecord = record => {
    return (
      <Fragment>
        {
          record
          ? record.map(( item, index ) => {
              return (
                <div
                    key={ index }
                    className="todo-item t-todo"
                >
                  <p className="todo-item__text">{ item }</p>
                  <span
                      className="todo-item__flag t-todo-complete-flag"
                      data-todo-id={ index }
                      onClick={ this.toggleRecordComplete }
                  >
                    [  ]
                  </span>
                </div>
              )
            })
          : null
        }
      </Fragment>
    )
  };
}

export default withLocalstorage('todo-app', [])(Todo)