import React, { Component } from 'react';

import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import SwapiService from '../../services/swapiService';

import './PeoplePage.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedItem: 3
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}>
                
                    {(i) => (
                        `${i.name} (${i.birthYear})`
                    )}

            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedItem} />
            </ErrorBoundry> 
        );

        return (
            <Row left={itemList} right={itemDetails} />                
        );
    }
}