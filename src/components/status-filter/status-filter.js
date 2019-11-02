import React, { Component } from 'react';
	import './status-filter.css';

export default class StatusFilter extends Component {

	buttons = [
		{ name: 'all', label: 'All' },
		{ name: 'active', label: 'Active' },
		{ name: 'done', label: 'Done' }
	];

	render() {

		const { curFilter } = this.props;

		const buttons = this.buttons.map(({ name, label}) => {
			
			const isActive = curFilter === name;
			let clazz = 'btn';
			clazz += isActive ? ' btn-info' : ' btn-secondary';

			return (
				<button className={clazz} key={name} onClick={() => this.props.onFilterChange(name)}>{label}</button>
			);
		});

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}