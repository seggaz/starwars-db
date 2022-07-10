import React, { Component } from "react";
import { PlanetList, PlanetsDetails } from "../sw-componets";

import Row from "../row";


export default class PlanetsPage extends Component {
	
	state = {
		selectedItem: null
	};

	onItemSelected = (selectedItem) => {
		this.setState({selectedItem});
	};

	render() {
		const {selectedItem} = this.state;
		
		return (
			<Row 
				left={<PlanetList onItemSelected={this.onItemSelected} />}
				right={<PlanetsDetails itemId={selectedItem} />}
			/>
		);
	}
}