import React, { useEffect, useState } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Heading } from './components/Heading';
import { getClubsThunk } from './redux/reducer';
import { ClubsList } from './components/ClubsList';
import { clubsListPropTypes } from './propTypesConstant';
import { Cities } from './components/Cities';
import { Activities } from './components/Activities';

const App = (props) => {
  const { clubsList, getClubs, cities, activities } = props;
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');

  useEffect(() => {
    getClubs();
  }, []);

  let filteredClubs = clubsList;

  if (selectedCity) {
    // filtering by city
    filteredClubs = clubsList.filter(club => club.city.title === selectedCity);
  } else if (selectedActivity) {
    // filtering by activity
    filteredClubs = clubsList
      .filter(club => club.activity
        .some(action => action.slug === selectedActivity));
  }

  if (selectedActivity && selectedCity) {
    // filtering by city & activity
    filteredClubs = clubsList
      .filter(club => club.city.title === selectedCity && club.activity
        .some(action => action.slug === selectedActivity));
  }

  return (
    <div className="app-wrapper">
      <Heading />
      <Cities
        cities={cities}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      />
      <Activities
        activities={activities}
        selectedActivity={selectedActivity}
        setSelectedActivity={setSelectedActivity}
      />
      <ClubsList clubsList={filteredClubs} />
    </div>
  );
};

const mapStateToProps = state => ({
  clubsList: state.clubsList,
  cities: state.cities,
  activities: state.activities,
});

const mapDispatchToProps = dispatch => ({
  getClubs: () => dispatch(getClubsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getClubs: PropTypes.func.isRequired,
  clubsList: clubsListPropTypes.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activities: PropTypes.arrayOf(PropTypes.string).isRequired,
};
