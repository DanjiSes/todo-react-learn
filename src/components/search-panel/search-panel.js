import React, { Component } from 'react';
	import './search-panel.css';

export default class SearchPanel extends Component {

	state = {
		term: ''
	}

	setTerm = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onSearchChange(term);
	}

	render() {
		return (
			<input
				className="form-control"
				placeholder="Search"
				value={this.state.term}
				onChange={this.setTerm}
			/>
		);
	}
};
