import React, { Component } from 'react';

	import AppHeader from '../app-header';
	import SearchPanel from '../search-panel';
	import TodoList from '../todo-list';
	import ItemAddForm from '../item-add-form';
	import StatusFilter from '../status-filter';

	import './app.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffe'),
			this.createTodoItem('Make Cool App')
		],
		term: '',
		filter: 'all' // all, active, done
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex(el => el.id === id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];
	}

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex(el => el.id === id)

			const newArr = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArr
			};
		})
	}

	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState(({todoData}) => {
			return {
				todoData: [...todoData, newItem]
			}
		})
	}

	toggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		})
	}

	toggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	search(items, term) {
		if (term.length === 0) return items;

		return items.filter((item) => {
			return item.label.toLowerCase()
				.indexOf(term.toLowerCase()) > -1;
		})
	}

	filter(items, filter) {
		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter(item => !item.done);
			case 'done':
				return items.filter(item => item.done);
			default:
				return items;
		}
	}

	searchChange = (term) => {
		this.setState({ term });
	}

	filterChange = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { todoData, term, filter } = this.state;
		const doneCount = todoData.filter(item => item.done).length;
		const toDoCount = todoData.length - doneCount;
		const visibleItems = this.filter(this.search(todoData, term), filter);

		return (
			<div className="todo-wrapper">
				<AppHeader toDo={toDoCount} done={doneCount} />
				<div className="todo-search">
					<SearchPanel onSearchChange={this.searchChange} />
					<StatusFilter curFilter={filter} onFilterChange={this.filterChange} />
				</div>
				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleImportant={this.toggleImportant}
					onToggleDone={this.toggleDone} />
				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		);
	}
};