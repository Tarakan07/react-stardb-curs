import React from "react";
import ItemList from "../item-list";
import { withData, WithSwapiServices } from "../hoc-helpers";

const withChildFunction = (Wrapped, fn) => {
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
const PersonList = WithSwapiServices(
	withData(withChildFunction(ItemList, renderName)),
	mapPersonMethodsToProps
);

const PlanetList = WithSwapiServices(
	withData(withChildFunction(ItemList, renderName)),
	mapPlanetMethodsToProps
);

const StarshipList = WithSwapiServices(
	withData(withChildFunction(ItemList, renderName)),
	mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
