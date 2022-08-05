import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";
const WithSwapiServices = (Wrapped) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
				{(swapiService) => {
					return <Wrapped {...props} swapiService={swapiService} />;
				}}
			</SwapiServiceConsumer>
		);
	};
};

export default WithSwapiServices;
