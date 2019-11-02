import React from 'react';
	import './app-header.css';

const AppHeader = ({ toDo, done }) => {
	return (
		<header className="todo-header">
			<h1>Todo List</h1>
			<b>{toDo} more to do, {done} done</b>
		</header>
	);
};

export default AppHeader;