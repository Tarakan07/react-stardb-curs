import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBountry from "../error-bountry";
import "./people-page.css";

export default class PeoplePage extends Component {
	state = {
		selectedItem: 3,
		hasError: false,
	};
	swapiService = new SwapiService();
	onPersonSelected = (id) => {
		this.setState({ selectedItem: id });
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
			>
				{(item) => `${item.name} (${item.birthYear})`}
			</ItemList>
		);
		const itemDetails = <ItemDetails itemId={this.state.selectedItem} />;
		return (
			<ErrorBountry>
				<Row left={itemList} right={itemDetails} />
			</ErrorBountry>
		);
	}
}
