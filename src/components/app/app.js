import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import "./app.css";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


export default class App extends Component {
	swapiService = new SwapiService();

	render() {
		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<Router>
						<div className="stardb-app">
							<Header />
							<RandomPlanet updateInterval={5000} />
							<Routes>
							
								<Route path="/people" element={<PeoplePage/>}/>
								<Route path='/planet' element={<PlanetPage/>}/>
								<Route path='/starship' element={<StarshipPage/>}/>
							</Routes>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}


