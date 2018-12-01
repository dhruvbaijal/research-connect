import React, {Component} from 'react';
import axios from 'axios';
import './Opportunities.scss';
import '../../index.css';
import Navbar from '../../components/Navbars/StudentNavbar/StudentNavbar';
import ProfessorNavbar from "../../components/Navbars/ProfessorNavbar/ProfessorNavbar";
import Footer from '../../components/Footer/Footer';
import logo from '../../images/vectorlogo.png';
import OpportunityBox from '../../components/Opportunity/OpportunityBox/OpportunityBox';
import FilterBox from '../../components/Filter/FilterBox/FilterBox';
import DeleteIcon from 'react-icons/lib/ti/delete';
import SearchIcon from 'react-icons/lib/io/search';
import * as Utils from '../../components/Utils';

class Opportunities extends Component {

	constructor(props) {
		super(props);
		this.state = {
			yearSelect: [],
			gpaSelect: '',
			startDate: {},
			compensationSelect: {},
			csAreaSelect: {},
			searchBar: '',
			matchingSearches: [],
			searching: false,
			clickedEnter: false,
			role: ''
		};

		this.handleYearFilter = this.handleYearFilter.bind(this);
		this.handleGPAFilter = this.handleGPAFilter.bind(this);
		this.handleStartDateFilter = this.handleStartDateFilter.bind(this);
		this.handleCompensationFilter = this.handleCompensationFilter.bind(this);
		this.handleCSAreaFilter = this.handleCSAreaFilter.bind(this);
	}

	componentDidMount() {
		axios.get('/api/role/' + sessionStorage.getItem('token_id'))
			.then((response) => {
				if (!response || response.data === "none" || !response.data) {
					alert("You must be signed in to view this.");
					window.location.href = '/';
				}
				else{
					this.setState({role: response.data});
				}
			})
			.catch(function (error) {
				Utils.handleTokenError(error);
			});
	}

	handleYearFilter(e){
		this.setState({yearSelect: event.target.value});
	}

	handleGPAFilter(e){
		this.setState({gpaSelect: event.target.value});
	}

	handleStartDateFilter(e) {
		const choice = event.target.value;

		if(choice === "any"){
			this.setState({startDate: { "season": null, "year": null }})
		}
		else{
			let tmp = choice.split(" ");
			this.setState({startDate: { "season": tmp[0],	"year": tmp[1] }});
		}
	}

	handleCompensationFilter(e){
		const choice = event.target.value;
		this.setState(function(prevState){
			const temp = prevState.compensationSelect.slice();
			if(temp.indexof(choice) != -1){
				temp.push(choice);
			}
			else{
				temp.pop(choice);
			}
			return {compensationSelect:temp};
		});
	}

	handleCSAreaFilter(e){
		const choice = event.target.value;
		this.setState(function(prevState){
			const temp = prevState.csAreaSelect.slice();
			if(temp.indexof(choice) != -1){
				temp.push(choice);
			}
			else{
				temp.pop(choice);
			}
			return {csAreaSelect:temp};
		});
	}

	handleUpdateSearch(e) {
		this.setState({searchBar: e.target.value});
		if (e.target.value == "") {
			this.setState({matchingSearches: []});
			this.setState({clickedEnter: false});
		}
	}

	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.setState({clickedEnter: true});
			axios.get('/api/opportunities/search' + '?search=' + this.state.searchBar)
				.then((response) => {
					let matching = [];
					for (let i = 0; i < response.data.length; i++) {
						matching.push(response.data[i]._id);
					}
					this.setState({matchingSearches: matching});
				})
				.catch(function (error) {
					Utils.handleTokenError(error);
				});
		}
	}

	onFocus() {
		this.setState({searching: true});
	}

	onBlur() {
		this.setState({searching: false})
	}

	clearSearch() {
		this.setState({searching: false});
		this.setState({searchBar: ""});
		this.setState({matchingSearches: []});
		this.setState({clickedEnter: false});
	}

	render() {
		return (
			<div className="opportunities-wrapper">
				{this.state.role === "undergrad" ? <Navbar current={"opportunities"}/> : <ProfessorNavbar current={"opportunities"}/>}

				<div className="row search-div-container">
					<div className="search-icon-div">
						<SearchIcon style={{ height: '100%' }} size={36} />
					</div>
					<input
						onFocus={this.onFocus.bind(this)}
						onBlur={this.onBlur.bind(this)}
						className="search-bar" onKeyPress={this.handleKeyPress.bind(this)}
						onChange={this.handleUpdateSearch.bind(this)} value={this.state.searchBar}
						type="text" name="search"
						placeholder="Search keywords (e.g. psychology, machine learning, Social Media Lab)"
					/>
					<div className="delete-div">
						{
							this.state.searchBar != "" ?
								<DeleteIcon
									onClick={this.clearSearch.bind(this)}
									className="clear-icon"
									style={{ height: '100%' }}
									size={36} />
							: ""
						}
					</div>
				</div>

				<div className="opp-container row">
					<div className="column column-20">
						<FilterBox
							handleYearFilter={this.handleYearFilter}
							handleGPAFilter={this.handleGPAFilter}
							handleStartDateFilter={this.handleStartDateFilter}
							handleCompensationFilter={this.handleCompensationFilter}
							handleCSAreaFilter={this.handleCSAreaFilter}
						/>
					</div>

					<div className="column opportunities-list-wrapper">
						<OpportunityBox
							filteredOptions={this.state}
							url='opportunities'
							searching={this.state.clickedEnter}
						/>
					</div>
				</div>

				<Footer/>
			</div>

		);
	}
}

export default Opportunities;
