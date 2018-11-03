import React, {Component} from 'react';
import './YearSelect.scss';

class YearSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yearSelect: this.props.yearSelect
		};
	}

	//when the year is changed, update the state so we can send it to the parent through the updateYear function
	handleChange(e) {
		//e.target.name is year associated w/ the event
		this.setState({
			yearSelect: {
				"freshman": this.freshman.checked,
				"sophomore": this.sophomore.checked,
				"junior": this.junior.checked,
				"senior": this.senior.checked
			}
		}, function () {
			//call updateYear to update the parent's state with the current state of these checkboxes
			this.props.updateYear(this.state.yearSelect);
		});
	}

	render() {
		return (
			<div className="year-select-wrapper">
				<input ref={(node) => {
					this.freshman = node
				}} onChange={this.handleChange.bind(this)} type="checkbox" name="freshman" value="freshman"/>Freshman
				<br/>
				<input ref={(node) => {
					this.sophomore = node
				}} onChange={this.handleChange.bind(this)} type="checkbox" name="sophomore" value="sophomore"/>Sophomore
				<br/>
				<input ref={(node) => {
					this.junior = node
				}} onChange={this.handleChange.bind(this)} type="checkbox" name="junior" value="junior"/>Junior
				<br/>
				<input ref={(node) => {
					this.senior = node
				}} onChange={this.handleChange.bind(this)} type="checkbox" name="senior" value="senior"/>Senior
			</div>
		);
	}
}

export default YearSelect;
