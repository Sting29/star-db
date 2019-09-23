import React from 'react';
import ItemList from '../ItemList';
import { withData } from '../hocHelpers';
import SwapiService from '../../services/swapiService';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const ListWithChildren = withChildFunction(
    ItemList,
    ({ name }) => <span>{name}</span>
);

const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetList = withData(ListWithChildren, getAllPlanets);
const StarshipList = withData(ListWithChildren, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};