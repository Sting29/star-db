import React, {Component} from 'react';

import Header from '../Header';
// import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
// import Row from '../Row';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../SwComponents';


import SwapiService from '../../services/swapiService';

import './App.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    render () {

        // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    {/* {planet}

                    <div className="row mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                                Toggle Random Planet
                        </button>
                    </div> */}

                    {/* <Row
                        left={personDetails}
                        right={starshipDetails} /> */}

                    <PersonDetails itemId={11} />

                    <PlanetDetails itemId={5} />

                    <StarshipDetails itemId={9} />

                    <PersonList />

                    <StarshipList />

                    <PlanetList />

                </div>
            </ErrorBoundry>            
        );  
    };
};