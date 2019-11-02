import React from 'react';
	import './search-panel.css';

const SearchPanel = () => {
	return (
		<div className="todo-search">
			<input className="form-control" placeholder="Search" />
			<div className="btn-group">
				<button className="btn btn-info">All</button>
				<button className="btn btn-secondary">Active</button>
				<button className="btn btn-secondary">Done</button>
			</div>
		</div>
	);
};

export default SearchPanel;