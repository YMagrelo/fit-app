import React from 'react';
import './App.scss';
import { Heading } from './components/Heading';

const App = () => (
  <div className="app-wrapper">
    <Heading />
    <div><h2>City list</h2></div>
    <div><h2>Workout list</h2></div>
    <div><h2>Club list</h2></div>
  </div>
);

export default App;
