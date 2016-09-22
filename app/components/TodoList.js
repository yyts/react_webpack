import React,{ PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
	render() {
		return(
			<ul>
				{ this.props.todos.map( todo =>
					<Todo {...todo}
				      key={todo.id}
					  onClick={() => this.props.onTodoClick(todo.id)}/> 
				)}
			</ul>
		)
	}
}

TodoList.propTypes = {
	// onTodoClick:PropTypes.func.isRequired,
	todos:PropTypes.array.isRequired
}


export default TodoList;

