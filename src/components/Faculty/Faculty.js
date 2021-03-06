import React, { Component } from 'react';
import '../Opportunity/OpportunityList/OpportunityList.scss';

class Faculty extends Component {
  constructor(props) {
    super(props);
  }

  convertDescription(str) {
    // if string is empty
    if (!str) {
      return '';
    }
    if (str.length > 250) {
      str = `${str.slice(0, 250)}... `;
      return (
        <h6>
          {str}
          <span className="viewDetails">View Details</span>
        </h6>
      );
    }
    return (
      <h6>
        {str}
        {' '}
      </h6>
    );
  }

  clickRow(rowObj) {
    // this.props.history.push({pathname: 'opportunity/' + this.props.opId});
    document.location.href = (`/faculty/${this.props.ID}`);
  }

  render() {
    return (
      <div className="application-box" onClick={this.clickRow.bind(this)}>
        <div className="row opp-box-row">
          <div className="column column-10">
            <img src={this.props.photoId} width="75px" />
          </div>
          {/* <div className="column column-10"> */}
          {/* </div> */}
          <div className="column column-90">
            <h4>{ this.props.name }</h4>
            <h5>{this.props.department}</h5>
            <h5>{this.props.lab}</h5>
            <div>
              {this.props.researchDescription && this.props.researchDescription.length > 0 ? this.convertDescription(this.props.researchDescription)
                : this.convertDescription(this.props.bio)}
            </div>
            {/* <h5>{this.props.researchInterests}</h5> */}
          </div>
          {/* <div className="column column-20"> */}
          {/* Accepting on Research Connect */}
          {/* </div> */}
        </div>


      </div>
    );
  }
}

export default Faculty;
