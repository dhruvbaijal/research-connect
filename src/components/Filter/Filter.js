import React, {Component} from 'react';
import * as Constants from '../../components/Constants'

class Filter extends React.Component {
  /* examples
    this.props.category: year, area, compensation
    this.props.choices: {choice1: display1, choice2: display2}
    this.props.type: text, checkbox
  */
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createCheckbox = this.createCheckbox.bind(this);
    this.createSelect = this.createSelect.bind(this);
  }

  handleChange(e){
    this.props.updateFilter(e);
  }

  //helper method for generating checkbox
  createCheckbox(){
    const choices = this.props.choices.map((value, display) =>
      <input onChange={this.handleChange}
             type="checkbox"
             value={value}>
        {display}
      </input>
    );
    return (
      <div className="checkbox-wrapper">
        { choices }
      </div>
    );
  }

  //helper method for generating select
  createSelect(){
    const choices = this.props.choices.map((value, display) =>
      <option key={value} value={value}>
        {display}
      </option>
    );
    return (
      <select className="select-wrapper" onChange={this.handleChange} >
        {choices}
      </select>
    );
  }

  render(){
    let filter;

    if(this.props.type === Constants.SELECT){
      filter = this.createSelect();
    }
    else if(this.props.type === Constants.CHECKBOX){
      filter = this.createCheckbox();
    }

    return (
      <div className="filter-child">
        <label htmlFor={this.props.labelRef}>{this.props.label}</label>
        {filter}
      </div>
    );
  }//end render
}//end class
