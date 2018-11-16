import React, {Component} from 'react';
import './CompensationSelect.scss';

class CompensationSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			compensationSelect: this.props.compensationSelect
		};
	}

	//when the compensation is changed, update the state so we can send it to the parent through the updateCompensation function
	handleChange(e) {
		this.setState({
			compensationSelect: {
				"pay": this.money.checked,
				"credit": this.credit.checked
			}
		}, function () {
			//update parent's state with the current state of the checkboxes (compensationSelect)
			this.props.updateCompensation(this.state.compensationSelect);
		});
	}

	render() {
		return (
			<div className="compensation-select-wrapper">
				<input ref={(node) => {
					this.money = node
				}} onChange={this.handleChange.bind(this)} type="checkbox" name="pay" value="pay"/>Money
				<br/>
				<input ref={(node) => {
					this.credit = node
				}} onChange={this.handleChange.bind(this)} type="checkbox" name="credit" value="credit"/>Credit
			</div>
		);
	}
}

export default CompensationSelect;
