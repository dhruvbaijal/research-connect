import React, {Component} from 'react';
import './CSAreaSelect.scss';

class CSAreaSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			csAreaSelect: this.props.csAreaSelect
		};
	}

	//when the CS area is changed, update the state so we can send it to the parent through updateCSArea function
	handleChange(e) {
		this.setState({
			csAreaSelect: {
				"Money": this.money.checked,
				"Credit": this.credit.checked
			}
		}, function () {
			this.props.updateCSArea(this.state.csAreaSelect);
		});
	}

	render() {
		return (
			<div className="csareaselect-select-wrapper">
				<input ref={(node) => {	this.money = node }}
				       onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Money" value="Money"/>
				Money
				<br/>
			</div>
		);
	}
}

export default CSAreaSelect;
