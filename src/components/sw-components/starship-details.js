import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { WithSwapiServices } from "../hoc-helpers";
const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Cost" />
		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getStarship,
		getImageUrl: swapiService.getStarshipImage,
	};
};
const add = (a) => (b) => {
	return a + b;
};
add(1)(2);
export default WithSwapiServices(mapMethodsToProps)(StarshipDetails);
