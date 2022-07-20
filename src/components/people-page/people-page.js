import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import "./people-page.css";
export default class PeoplePage extends Component {
	state = {
		selectedPerson: 3,
		hasError: false,
	};
	swapiService = new SwapiService();
	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id });
	};
	componentDidCatch() {
		this.setState({ hasError: true });
	}
	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		return (
			<div className="row mb2 row-data">
				<div className="col-md-6">
					<ItemList
						onItemSelected={this.onPersonSelected}
						getData={this.swapiService.getAllPeople}
					/>
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson} />
				</div>
			</div>
		);
	}
}
