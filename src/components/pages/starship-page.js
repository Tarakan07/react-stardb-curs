
import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from "react-router-dom";
const StarshipPage=({history,match})=> {
		return (
			<StarshipList onItemSelected={(itemId)=>{
				return history.push(`starship/${itemId}`);
			}}/>
		);
		}
	
export default withRouter(StarshipPage);