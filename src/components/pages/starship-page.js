import { render } from "@testing-library/react";
import React, { Component } from "react";
import Row from "../row/row";
import { StarshipDetails, StarshipList } from "../sw-components";
export default class StarshipPage extends Component {
	state = {
		selectedItem: null,
	};
	onItemSelected = (selectedItem) => {
		this.setState({
			selectedItem,
		});
	};
	render() {
		const { selectedItem } = this.state;
		return (
			<Row
				left={<StarshipList onItemSelected={this.onItemSelected} />}
				right={<StarshipDetails itemId={selectedItem} />}
			/>
		);
	}
}
