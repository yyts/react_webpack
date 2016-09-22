import React,{ PropTypes } from 'react';
import AddTodo from '../components/AddTodo';
import ToodList from '../components/TodoList';
import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { addTodo,completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/';

class App extends React.Component {
	
	render(){
		const { addTodo, completeTodo, setVisibilityFilter } = this.props;
		return(
			<div>
				<AddTodo onAddSubmit={addTodo} />
				<ToodList todos={this.props.todos} onTodoClick={ completeTodo }  />
				<Footer filter={this.props.visibilityFilter} onFilterChange={ setVisibilityFilter } />
			</div>
		);

	}
}


App.propTypes = {
	addTodo: React.PropTypes.func.isRequired,
	completeTodo:React.PropTypes.func.isRequired,
	visibilityFilter: PropTypes.oneOf([
	    'SHOW_ALL',
	    'SHOW_COMPLETED',
	    'SHOW_ACTIVE'
	  ]).isRequired
}

function selectTodos(state,filter){
	switch (filter){
		case VisibilityFilters.SHOW_ALL:
			return state;
		case VisibilityFilters.SHOW_COMPLETED:
			return state.filter( todo => todo.completed );
		case VisibilityFilters.SHOW_ACTIVE:
			return state.filter( todo => !todo.completed );
		return state;
	}
}

function mapStateToProps(state){
	return {
		todos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

export default connect(mapStateToProps,{ addTodo, completeTodo, setVisibilityFilter })(App);
