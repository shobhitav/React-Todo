import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todo: {value: this.props.todo.value, completed: this.props.todo.completed}};
    }

    toggleTodo = event => {
        this.setState({todo: {value: this.props.todo.value, completed: !this.state.todo.completed}});
    }

    render() {
        return (
            <li onClick={this.toggleTodo} className={this.state.todo.completed ? 'completed' : 'incomplete'}>{this.state.todo.value}</li>
        )
    }   
}

export default Todo;

