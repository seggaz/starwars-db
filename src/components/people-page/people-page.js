import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ItemList from "../item-list";
import ItemDetails from "../item-details/item-details";
import Row from "../row";

import './people-page.css';


export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: 11
	};

	onPersonSelected = (selectedPerson) => {
		this.setState({ selectedPerson });
	  };

	render() {

		const itemList =(
			<ItemList 
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}>
				
				{(i) => (
					`${i.name} (${i.birthYear})`
				)}

			</ItemList>
		);

		const personDetails = (
			<ErrorBoundry>
				<ItemDetails personId={this.state.selectedPerson}/>
			</ErrorBoundry>
		)

		return (
			<Row left={itemList} right={personDetails} />
		);
	}
}