import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import "./app.css";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
	swapiService = new SwapiService();
	state = {
		selectedPerson: 5,
		hasError: false,
	};

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
		const items = this.state.selectedPerson;
		return (
			<div>
				<Header />
				<RandomPlanet />

				<PeoplePage />

				

				
			</div>
		);
	}
}
