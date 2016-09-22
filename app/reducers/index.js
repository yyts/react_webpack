import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/';

const { SHOW_ALL } = VisibilityFilters;

function todo(state, action){
	switch (action.type){
		case ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case COMPLETE_TODO:
		
			if(state.id !== action.id){
				return state;
			}
		
			state.completed = !state.completed;
		 	return state;
		default:
			return state;
	}
}

function visibilityFilter(state = SHOW_ALL, action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			console.log(action);
			return action.filter;
		default: return state;
	}
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // console.log(action);
      // return state
      return [
        ...state,
        todo(undefined, action)
      ];
    case COMPLETE_TODO:
      return state.map( t => todo(t, action) );
      
  //     return state.map( t => {
  //     	if(t.id === action.id){
  //     		t.completed = !t.completed;
  //     	}
		// return t; });
    default:
      return state
  }
}
const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;