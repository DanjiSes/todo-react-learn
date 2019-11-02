import React from 'react';
	import ReactDOM from 'react-dom';

	import AppHeader from '../app-header';
	import SearchPanel from '../search-panel';
	import TodoList from '../todo-list';

	import './app.css';

const App = () => {

	const todoData = [
		{ label: 'Drink Coffe', important: false, id: 1 },
		{ label: 'Make Cool App', important: true, id: 2 }
	];

	return (
		<div className="todo-wrapper">
			<AppHeader />
			<SearchPanel />
			<TodoList todos={todoData} />
		</div>
	);
};

export default App;