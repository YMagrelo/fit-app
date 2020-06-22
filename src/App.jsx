import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Heading } from './components/Heading';
import { getClubsThunk } from './redux/reducer';
import { ClubsList } from './components/ClubsList';
import { clubsListPropTypes } from './propTypesConstant';

const App = (props) => {
  const { clubsList, getClubs } = props;

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <div className="app-wrapper">
      <Heading />
      <div><h2>City list</h2></div>
      <div><h2>Workout list</h2></div>
      <ClubsList clubsList={clubsList} />
    </div>
  );
};

const mapStateToProps = state => ({
  clubsList: state.clubsList,
});

const mapDispatchToProps = dispatch => ({
  getClubs: () => dispatch(getClubsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getClubs: PropTypes.func.isRequired,
  clubsList: clubsListPropTypes.isRequired,
};


