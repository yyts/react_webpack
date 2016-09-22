import React,{ PropTypes } from 'react';

class Todo extends React.Component {
	render(){
		return(
			<li onClick={this.props.onClick}
				style={{
					textDecoration: this.props.completed ? 'line-through' : 'none',
					fontStyle: this.props.completed ? 'italic' : 'normal'
			}}>
			{this.props.text}
			</li>
		)
	}
}

Todo.propTypes = {
	onClick:PropTypes.func.isRequired,
	text:PropTypes.string.isRequired,
	completed:PropTypes.bool.isRequired
}

export default Todo;