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
				"cloudComputing": this.cloudComputing.checked,
				"operatingSystems": this.operatingSystems.checked,
				"networks": this.networks.checked,
				"algorithms": this.algorithms.checked,
				"humanComputerInteraction": this.humanComputerInteraction.checked,
				"programmingLanguages": this.programmingLanguages.checked,
				"naturalLanguageProcessing": this.naturalLanguageProcessing.checked,
				"machineLearning": this.machineLearning.checked,
				"robotics": this.robotics.checked,
				"graphics": this.graphics.checked,
				"security": this.security.checked,
				"optimization": this.optimization.checked,
				"computationalBiology": this.computationalBiology.checked,
				"other": this.other.checked
			}
		}, function () {
			this.props.updateCSArea(this.state.csAreaSelect);
		});
	}

	render() {
		return (
			<div className="csareaselect-select-wrapper">
				<input ref={(node) => {	this.cloudComputing = node }}
				       onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Cloud Computing and/or Distributed systems" value="Cloud Computing and/or Distributed systems"/>
				Cloud Computing and/or Distributed systems
				<br/>
				<input ref={(node) => {	this.operatingSystems = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Operating systems" value="Operating systems"/>
				Operating systems
				<br/>
				<input ref={(node) => {	this.networks = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Computer networks" value="Computer networks"/>
				Computer networks
				<br/>
				<input ref={(node) => {	this.algorithms = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Algorithms" value="Algorithms"/>
				Algorithms
				<br/>
				<input ref={(node) => {	this.humanComputerInteraction = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Human-Computer Interaction" value="Human-Computer Interaction"/>
				Human-Computer Interaction
				<br/>
				<input ref={(node) => {	this.programmingLanguages = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Programming Languages" value="Programming Languages"/>
				Programming Languages
				<br/>
				<input ref={(node) => {	this.naturalLanguageProcessing = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Natural Language Processing" value="Natural Language Processing"/>
				Natural Language Processing
				<br/>
				<input ref={(node) => {	this.machineLearning = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Machine Learning and/or Artificial Intelligence" value="Machine Learning and/or Artificial Intelligence"/>
				Machine Learning and/or Artificial Intelligence
				<br/>
				<input ref={(node) => {	this.robotics = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Robotics" value="Robotics"/>
				Robotics
				<br/>
				<input ref={(node) => {	this.graphics = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Graphics" value="Graphics"/>
				Graphics
				<br/>
				<input ref={(node) => {	this.security = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Security" value="Security"/>
				Security
				<br/>
				<input ref={(node) => {	this.optimization = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Optimization" value="Optimization"/>
				Optimization
				<br/>
				<input ref={(node) => {	this.computationalBiology = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Computational Biology" value="Computational Biology"/>
				Computational Biology
				<br/>
				<input ref={(node) => {	this.other = node }}
							 onChange={this.handleChange.bind(this)}
							 type="checkbox" name="Other" value="Other"/>
				Other
			</div>
		);
	}
}

export default CSAreaSelect;
