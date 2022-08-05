import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";

import { WithSwapiServices } from "../hoc-helpers";

const PersonDetails = ({ itemId, swapiService }) => {
	const { getPerson, getPersonImage } = swapiService;
	return (
		<ItemDetails
			itemId={itemId}
			getData={getPerson}
			getImageUrl={getPersonImage}
		>
			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	);
};
export default WithSwapiServices(PersonDetails);
