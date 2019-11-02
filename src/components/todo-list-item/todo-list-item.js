import React, { Component } from 'react';
	import './todo-list-item.css';

export default class TodoListItem extends Component {

	render() {
		
		const { label, done, important, onDeleted, onToggleImportant, onToggleDone } = this.props;

		let classNames = 'todo-item';

		if (done) classNames += ' done';
		if (important) classNames += ' important';

		return (
			<span className={classNames}>
				<span onClick={onToggleDone}>
					{ label }
				</span>
				<button
					className="btn btn-outline-danger"
					onClick={onDeleted}
				>
					<i className="fa fa-trash-o" />
				</button>
				<button 
					className="btn btn-outline-success"
					onClick={onToggleImportant}
				>
					<i className="fa fa-exclamation" />
				</button>
			</span>
		);
	}
}