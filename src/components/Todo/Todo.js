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
    event.preventDefault()
    this.createNewRecord()
    this.setState({
      inputValue: ''
    })
  }
  toggleRecordComplete = event => {
    console.log( 'toggleRecordComplete', event.target )
  }

  createNewRecord = () => {
    const saveData = this.state.inputValue
    withLocalstorage('todo-app', [ saveData ])(Todo)
    console.log( 'createNewRecord', saveData )
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
      savedData
    } = this.props
    console.log( 'props Todo', this.props )
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
              onClick={ this.createNewRecordByEnter }
          >+</span>
        </div>
        { savedData ? this.renderRecord( savedData ) : null }
      </div>
    )
  }

  renderRecord = record => {
    console.log( 'record', record )
  };
}

export default withLocalstorage('todo-app', [])(Todo)