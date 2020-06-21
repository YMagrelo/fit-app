import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Heading } from './components/Heading';
import { getClubsThunk } from './redux/reducer';

const App = () => (
  <div className="app-wrapper">
    <Heading />
    <div><h2>City list</h2></div>
    <div><h2>Workout list</h2></div>
    <div><h2>Club list</h2></div>
  </div>
);

const mapStateToProps = state => ({
  clubsList: state.clubsList,
});

const mapDispatchToProps = dispatch => ({
  getClubs: () => dispatch(getClubsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
