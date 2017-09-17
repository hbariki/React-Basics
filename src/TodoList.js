import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Todoinput from './Todoinput';
import './App.css';


class TodoList extends React.Component {

  static propTypes = {
      todos: React.PropTypes.array
  }
  constructor(props){
      super(props);
          this.state = { todos: this.props.todos || [] }
      }
  addTodo = (item) => {
    this.setState({todos: this.state.todos.concat([item])});
      }
  render () {
      return (
          <div className = "App">
             <div className = "App-header">
               <h3>Make a List of Things using this Todo List</h3>
             </div>
               <h3>Todo List</h3>
               <TodoItems items= {this.state.todos} />
               <Todoinput addTodo={this.addTodo} />
         </div>

      )
   };

}
export default TodoList;
