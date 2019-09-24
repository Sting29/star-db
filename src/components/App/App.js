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
import dummySwapiService from '../../services/dummySwapiService';   // for tests

import { SwapiServiceProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {

    // swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        swapiService: new dummySwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? 
                                dummySwapiService : SwapiService;
                                
            console.log('switched to: ', Service.name);

            return {
                swapiService: new Service()
            };

        });


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
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />
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
                </SwapiServiceProvider>
            </ErrorBoundry>            
        );  
    };
};