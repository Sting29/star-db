import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';

import SwapiService from '../../services/swapiService';
import dummySwapiService from '../../services/dummySwapiService';   // for tests

import { SwapiServiceProvider } from '../SwapiServiceContext';

import './App.css';

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? 
                                dummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render () {

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />

                        <RandomPlanet />
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                        
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>            
        );  
    };
};