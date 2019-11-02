import React from 'react';
	import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
	
	const styles = {
		color: important ? 'tomato' : 'black'
	};

	return (
		<span className="todo-item">
			<span  style={styles}>{ label }</span>
			<button className="btn btn-outline-danger">
				<i className="fa fa-trash-o" />
			</button>
			<button className="btn btn-outline-success">
				<i className="fa fa-exclamation" />
			</button>
		</span>
	);
};

export default TodoListItem;