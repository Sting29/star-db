import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import { PeoplePage, 
         PlanetsPage, 
         StarshipsPage,
         SecretPage,
         LoginPage } from '../Pages';

import SwapiService from '../../services/swapiService';
import dummySwapiService from '../../services/dummySwapiService';   // for tests

import { SwapiServiceProvider } from '../SwapiServiceContext';

import './App.css';
import { StarshipDetails } from '../SwComponents';

export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
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

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Switch>
                                <Route path="/" 
                                       render={() => <h2>Welcome to StarDB</h2>}
                                       exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetsPage} />
                                <Route path="/starships" exact component={StarshipsPage} />
                                <Route path="/starships/:id"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        console.log(match);
                                        return <StarshipDetails itemId={id} />
                                    }} />
                                <Route path="/login" render={() => (
                                    <LoginPage 
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin} />
                                )} />
                                <Route path="/secret" render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn} />
                                )} />
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                            
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>            
        );  
    };
};