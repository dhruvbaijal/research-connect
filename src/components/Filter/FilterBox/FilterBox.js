import React, {Component} from 'react';
import * as Constants from '../../../components/Constants'

class FilterBox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="filter-box">
        <div className="filter-child">
          Filter by...
        </div>

        <hr/>

        //year filter
        <Filter
          label="School Year"
          choices={ Constants.START_DATE_CHOICES }
          type = { Constants.CHECKBOX }
          updateFilter={this.props.handleYearFilter}
        />

        <hr/>

        //gpa filter
        <Filter
          label="GPA Requirement"
          choices={ Constants.GPA_CHOICES }
          type= { Constants.SELECT }
          updateFilter={this.props.handleGPAFilter}
        </div>

        <hr />

        //start date filter
        <Filter
          label="Start Date"
          choices={ Constants.START_DATE_CHOICES }
          type= { Constants.SELECT }
          updateFilter={this.props.handleStartDateFilter}
        />

        <hr />

        //compensation filter
        <Filter
          label="Compensation"
          choices={ Constants.COMPENSATION_CHOICES }
          type= { Constants.CHECKBOX }
          updateFilter={this.props.handleCompensationFilter}
        />

        <hr />

        //cs area filter
        <Filter
         label="CS Areas"
         choices = { Constants.CS_AREA_CHOICES }
         type= { Constants.CHECKBOX }
         updateFilter={this.props.handleCSAreaFilter}
        />

      </div>
    );
  }//end render

}//end class

export default FilterBox
