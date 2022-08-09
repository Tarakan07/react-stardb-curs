import React from "react";
import ItemList from "../item-list";
import { withData, WithSwapiServices } from "../hoc-helpers";

const withChildFunction = (fn) => (Wrapped) => {
	return (props) => {
		return <Wrapped {...props}>{fn}</Wrapped>;
	};
};

const renderName = ({ name }) => <span>{name}</span>;
const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople,
	};
};
const mapPlanetMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets,
	};
};
const mapStarshipMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships,
	};
};
const PersonList = WithSwapiServices(mapPersonMethodsToProps)(
	withData(withChildFunction(renderName)(ItemList))
);

const PlanetList = WithSwapiServices(mapPlanetMethodsToProps)(
	withData(withChildFunction(renderName)(ItemList))
);

const StarshipList = WithSwapiServices(mapStarshipMethodsToProps)(
	withData(withChildFunction(renderName)(ItemList))
);

export { PersonList, PlanetList, StarshipList };
