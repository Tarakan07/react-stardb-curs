import React from "react";
import ItemList from "../item-list";
import {
	withData,
	WithSwapiServices,
	withChildFunction,
	compose,
} from "../hoc-helpers";

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
const PersonList = compose(
	WithSwapiServices(mapPersonMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);



// const PersonList2 = WithSwapiServices(mapPersonMethodsToProps)(
// 	withData(withChildFunction(renderName)(ItemList))
// );

const PlanetList = compose(
	WithSwapiServices(mapPlanetMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);
// const PlanetList2 = WithSwapiServices(mapPlanetMethodsToProps)(
// 	withData(withChildFunction(renderName)(ItemList))
// );
const StarshipList = compose(WithSwapiServices(mapStarshipMethodsToProps),withData,withChildFunction(renderName))(ItemList);

// const StarshipList2 = WithSwapiServices(mapStarshipMethodsToProps)(
// 	withData(withChildFunction(renderName)(ItemList))
// );

export { PersonList, PlanetList, StarshipList };
