import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Heading } from './components/Heading';
import { getClubsThunk } from './redux/reducer';
import { ClubsList } from './components/ClubsList';
import { clubsListPropTypes } from './propTypesConstant';

const App = (props) => {
  const { clubsList, getClubs, cities } = props;

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <div className="app-wrapper">
      <Heading />
      <Cities cities={cities} />
      <div><h2>Workout list</h2></div>
      <ClubsList clubsList={clubsList} />
    </div>
  );
};

const mapStateToProps = state => ({
  clubsList: state.clubsList,
  cities: state.cities,
});

const mapDispatchToProps = dispatch => ({
  getClubs: () => dispatch(getClubsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getClubs: PropTypes.func.isRequired,
  clubsList: clubsListPropTypes.isRequired,
};

const Cities = (props) => {
  const { cities } = props;

  return (
    <div className="list">
      {cities.map(city => (
        <button
          type="button"
          className="item"
        >
          {city}
        </button>
      ))}
    </div>
  );
};
