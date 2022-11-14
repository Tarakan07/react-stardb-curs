import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import { StarshipDetails } from "../sw-components";
import "./app.css";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { render } from "@testing-library/react";


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
							
								<Route path="/" exact  render={()=><h2>Welcome to StarDB</h2>}/>
								<Route path="/people/:id?" component={PeoplePage}/>
								<Route path='/planet' component={PlanetPage}/>
								
								<Route path='/starship' exact component={StarshipPage}/>
								<Route path='/starship/:id' render={({match})=>{
									const {id}=match.params;
									return <StarshipDetails itemId={id}/>
								}}/>
							
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	}
}


