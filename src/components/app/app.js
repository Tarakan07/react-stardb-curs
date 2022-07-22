import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import Row from "../row";
import ItemDetails from "../item-details";
import "./app.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
export default class App extends Component {
	state = {
		hasError: false,
	};
	swapiService = new SwapiService();
	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		const { getPerson, getStarship, getPersonImage, getStarshipImage } =
			this.swapiService;
		const personDetails = (
			<ItemDetails
				itemId={11}
				getData={getPerson}
				getImageUrl={getPersonImage}
			/>
		);
		const starshipDetails = (
			<ItemDetails
				itemId={5}
				getData={getStarship}
				getImageUrl={getStarshipImage}
			/>
		);
		return (
			<div>
				<Header />
				<RandomPlanet />
				<Row left={personDetails} right={starshipDetails}></Row>
				{/* <PeoplePage /> */}
			</div>
		);
	}
}
