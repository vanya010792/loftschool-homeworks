import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  // getId() {
  //   const { savedData } = this.props;
  //   console.log( 'getId savedData', savedData )
  //   const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
  //   return biggest + 1;
  //   console.log( 'getId biggest', biggest )
  // }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  createNewRecordByEnter = event => {
    console.log( 'createNewRecordByEnter', event.target )
  }

  toggleRecordComplete = event => {
    console.log( 'toggleRecordComplete', event.target )
  }

  createNewRecord = () => {
    // const getIdMe = this.getId()
    // console.log( 'createNewRecord', getIdMe )
    const saveData = this.state.inputValue
    console.log( saveData )
    return saveData
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
    const {
      savedData,
      saveData
    } = this.props
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
              onClick={ this.createNewRecord }
          >+</span>
        </div>
        { this.renderRecord( saveData ) }
      </div>
    )
  }

  renderRecord = record => {
    if( record ) {
      console.log( 'record', record )
    } else {
      console.log('record else', record)
    }
  };
}

export default withLocalstorage('todo-app', [])(Todo)
// export default Todo