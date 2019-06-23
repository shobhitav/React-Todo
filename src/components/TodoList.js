import React from 'react';
import Todo from './Todo';

const defaultTodo = {value: '', completed: false};

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoList : [], newTodo : defaultTodo };
    }

    handleInputChange = event => this.setState( { newTodo: {value : event.target.value } } );

    addTodoHandler = event => this.setState({todoList : [...this.state.todoList,this.state.newTodo]});

    render() {
        return (
            <div>
                <input 
                    type='text'
                    placeholder='Todo...'
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addTodoHandler}>Add Todo</button>
                <ul>
                    {
                        this.state.todoList.map( todo => <Todo key={todo.value} todo={todo} />)
                    }
                </ul>
            </div>
        )   
    }  
}

export default TodoList;

