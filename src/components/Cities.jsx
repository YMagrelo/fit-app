import React from 'react';
import './Cities.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Cities = (props) => {
  const { cities, setSelectedCity, selectedCity } = props;

  return (
    <div className="citiesList">
      {selectedCity
      && (
        <button
          type="button"
          className="citiesItem citiesItem--reset"
          onClick={() => setSelectedCity('')}
        >
Reset
        </button>
      )}
      {cities.map(city => (
        <button
          type="button"
          className={classNames('citiesItem',
            { isActive: selectedCity === city })}
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
