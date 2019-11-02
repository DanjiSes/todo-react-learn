import React, { Component } from 'react';
	import './item-add-form.css';

export default class ItemAddForm extends Component {

	state = {
		label: ''
	}

	changeLabel = (e) => {
		this.setState({
			label: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.label.trim()) return;

		this.props.onItemAdded(this.state.label);
		this.setState({
			label: ''
		});
	}

	render() {
		return (
			<form className="item-add-form"
						onSubmit={this.onSubmit}>
				<input 
					className="form-control"
					placeholder="What needs to be done"
					onChange={this.changeLabel}
					value={this.state.label}
				/>
				<button className="btn btn-outline-secondary">Add</button>
			</form>
		);
	}
}