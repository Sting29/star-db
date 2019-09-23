import React, {Component} from 'react';

import Header from '../Header';
// import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
// import Row from '../Row';
// import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
// import ItemList from '../ItemList';

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

        // const { getPerson, 
        //         getStarships,
        //         getPersonImage, 
        //         getStarshipImage,
        //         getAllPeople, 
        //         getAllPlanets} = this.swapiService;

        // const personDetails = (
        //     <ItemDetails 
        //         itemId={11}
        //         getData={getPerson}
        //         getImageUrl={getPersonImage}>

        //         <Record field="gender" label="Gender" />
        //         <Record field="eyeColor" label="Eye Color" />

        //     </ItemDetails>
        // );

        // const starshipDetails = (
        //     <ItemDetails 
        //         itemId={5}
        //         getData={getStarships}
        //         getImageUrl={getStarshipImage}>

        //         <Record field="model" label="Model" />
        //         <Record field="length" label="Length" />
        //         <Record field="costInCredits" label="Cost" />

        //     </ItemDetails>
        // );

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

                    <PersonList>
                        { ({name}) => <span>{name}</span> }
                    </PersonList>

                    <StarshipList>
                        { ({name}) => <span>{name}</span> }
                    </StarshipList>

                    <PlanetList>
                        { ({name}) => <span>{name}</span> }
                    </PlanetList>

                    {/* <ItemList
                        getData={getAllPlanets}
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </ItemList> */}

                </div>
            </ErrorBoundry>            
        );  
    };
};