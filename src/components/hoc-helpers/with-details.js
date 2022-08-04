import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const withDetails = (View, getData, getImageUrl, itemId) => {
	return class extends Component {
		state = {
			item: null,
			image: null,
		};

		componentDidMount() {
			this.updateItem();
		}

		componentDidUpdate(prevProps) {
			if (this.props.itemId !== prevProps.itemId) {
				this.updateItem();
			}
		}

		updateItem() {
			if (!itemId) {
				return;
			}

			getData(itemId).then((item) => {
				this.setState({
					item,
					image: getImageUrl(item),
				});
			});
		}

		render() {
			const { item, image } = this.state;

			return <View {...this.props} item={item} image={image} />;
		}
	};
};

export { withDetails };
