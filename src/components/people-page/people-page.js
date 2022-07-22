import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBountry from "../error-bountry";
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

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
			>
				{(item) => `${item.name} (${item.birthYear})`}
			</ItemList>
		);
		const personDetails = (
			<PersonDetails personId={this.state.selectedPerson} />
		);
		return (
			<ErrorBountry>
				<Row left={itemList} right={personDetails} />
			</ErrorBountry>
		);
	}
}
