import React, { PropTypes } from 'react';

class Footer extends React.Component {
	renderFilter(filter, name){
		if(filter == this.props.filter){
			return name;
		}
		return (
		  <a href="#" onClick={e => {
		    e.preventDefault()
		    this.props.onFilterChange(filter)
		  }}>
		    {name}
		  </a>
		)
	}	
	render(){
		return(
			<div>
			Show:
	        	{this.renderFilter('SHOW_ALL', 'All')},
	        	{this.renderFilter('SHOW_COMPLETED', 'Completed')},
	        	{this.renderFilter('SHOW_ACTIVE', 'Active')}
	        </div>
		);
	}
}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired
}


export default Footer;