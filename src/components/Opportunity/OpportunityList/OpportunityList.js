import React, {Component} from 'react';
import Opportunity from '../Opportunity'
import './OpportunityList.scss'

class OpportunityList extends Component {

		constructor(props) {
			super(props);
		}

		countNodes(nodes){
			let tempCount = 0;
			let countString = "";
			for (let k in nodes) {
				if (nodes[k]!=null) {
					tempCount++;
				}
			}
			countString = tempCount === 1 ?  "There is 1 result" : "There are " + tempCount.toString() +" results";
			return(countString);
		}

		union(arr1, arr2){
			return arr1.filter(function(i) { return arr2.indexOf(i) > -1 });
		}

		checkboxFilter(filterSelected, filterAllowed){
			return (filterSelected.length === 0 || this.union(filterSelected, filterAllowed).length !== 0);
		}

		render() {
				let oppNodes = this.props.data.map(opp => {
					let willShow = true; //set to false if any filter excludes this opportunity
					const filteredOptions = this.props.filteredOptions;

					let matchingSearches = filteredOptions.matchingSearches;
					if (filteredOptions.searchBar !== "" && filteredOptions.clickedEnter){
						let matches = false;
						for (let i = 0; i<matchingSearches.length; i++){
							if(matchingSearches[i] === opp._id){
								matches = true;
							}
						}
						willShow = matches;
					}

					let yearsSelected = filteredOptions.yearSelect;
					let yearsAllowed = opp.yearsAllowed;
					willShow = willShow && this.checkboxFilter(yearsSelected, yearsAllowed);

					let minGPA = filteredOptions.gpaSelect;
					if (minGPA && minGPA < opp.minGPA){
								willShow = false;
					}

					let season = filteredOptions.startDate.season;
					let year = filteredOptions.startDate.year;
					if (season && (season != opp.startSeason || year != opp.startYear)){
								willShow = false;
					}

					let csAreasSelected = filteredOptions.csAreaSelect;
					let csAreasAllowed = opp.areas;
					willShow = willShow && this.checkboxFilter(csAreasSelected, csAreasAllowed);

					let compensationsSelected = filteredOptions.compensationSelect;
					let compensationsAllowed = opp.compensation;
					willShow = willShow && this.checkboxFilter(compensationsSelected, compensationsAllowed);

					if (willShow){
							return (
								<Opportunity
									filteredOptions={ this.props.filteredOptions }
									key={ opp['_id'] }
									title={ opp.title }
									area={ opp.areas }
									labId={ opp.labId }
									labName={ opp.labName }
									pi={ opp.pi }
									supervisor={ opp.supervisor }
									projectDescription={ opp.projectDescription }
									undergradTasks={ opp.undergradTasks}
									opens={ opp.opens }
									closes={ opp.closes }
									startSeason={ opp.startSeason }
									startYear={ opp.startYear}
									minSemesters={ opp.minSemesters }
									minHours={ opp.minHours }
									maxHours={ opp.maxHours }
									qualifications={ opp.qualifications }
									minGPA={ opp.minGPA }
									requiredClasses={ opp.requiredClasses }
									questions={ opp.questions }
									additionalInformation = {opp.additionalInformation}
									yearsAllowed={ opp.yearsAllowed }
									prereqsMatch={opp.prereqsMatch}
									spots={ opp.spots }
									opId={opp._id} />
						)
					} //end if

				}); //end map

				let nodeCount = this.countNodes(oppNodes);
				let searchCrit = this.props.searching ? <p>{nodeCount} matching your search criteria.</p> : <span></span>;
				return (
					<div>
						<div className="node-list-div">
							{ searchCrit }
							</div>
							{ oppNodes }
					</div>
				)
		}
}

export default OpportunityList
