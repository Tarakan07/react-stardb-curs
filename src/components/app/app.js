import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
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
			<ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
				<Record field="gender" label="Gender" />
				<Record field="gender" label="Gender" />
			</ItemDetails>
		);
		const starshipDetails = (
			<ItemDetails
				itemId={5}
				getData={getStarship}
				getImageUrl={getStarshipImage}
			>
				<Record field="name" label="Name" />
				<Record field="length" label="Length" />
				<Record field="costCredits" label="Cost" />
			</ItemDetails>
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
