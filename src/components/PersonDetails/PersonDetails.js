import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton';

import './PersonDetails.css';


export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId)
    .then((person) => {
      this.setState({ person,
       loading: false});
    });
  };

  render() {

    

    const { loading, person } = this.state;

    if(!person) {
      return <span>Select a person from a list</span>
    }

    const content = loading ? <Spinner /> : <PersonDetailsView person={person} />;

    return (
      <div className="person-details card">
        {content}
      </div>
    );
  };
}

const PersonDetailsView = ({person}) => {
  const { id, name, gender, 
    birthYear, eyeColor } = person;
  
  return (
    <React.Fragment>
      <img className="person-image" alt="planet foto"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
    </React.Fragment>
  );
}