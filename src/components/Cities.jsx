import React from 'react';
import './Cities.scss';
import PropTypes from 'prop-types';

export const Cities = (props) => {
  const { cities, setSelectedCity, selectedCity } = props;

  return (
    <div className="citiesList">
      {selectedCity
      && (
        <button
          type="button"
          className="citiesItem citiesItem--reset"
          onClick={() => setSelectedCity(null)}
        >
Reset
        </button>
      )}
      {cities.map(city => (
        <button
          type="button"
          className="citiesItem"
          onClick={() => setSelectedCity(city)}
          key={city}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedCity: PropTypes.func.isRequired,
  selectedCity: PropTypes.string,
};

Cities.defaultProps = {
  selectedCity: PropTypes.string,
};
