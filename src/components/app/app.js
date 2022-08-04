import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";

import Row from "../row/row";
import SwapiService from "../../services/swapi-service";
import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList,
} from "../sw-components";

import "./app.css";

export default class App extends Component {
	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet,
			};
		});
	};

	render() {
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<ErrorBoundry>
				<div className="stardb-app">
					<Header />
					{planet}
					<PersonDetails itemId={10} />
					<PlanetDetails itemId={2} />

					<StarshipDetails itemId={2} />
					<PersonList>{({ name }) => <span>{name}</span>}</PersonList>
					<PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
					<StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
				</div>
			</ErrorBoundry>
		);
	}
}
