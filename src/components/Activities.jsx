import React from 'react';
import './Activities.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Activities = (props) => {
  const { activities, selectedActivity, setSelectedActivity } = props;

  return (
    <div className="activitiesList">
      {selectedActivity
      && (
        <button
          type="button"
          className="activitiesItem activitiesItem--reset"
          onClick={() => setSelectedActivity('')}
        >
Reset
        </button>
      )}
      {activities.map(activity => (
        <button
          type="button"
          className={classNames('activitiesItem',
            { isActive: activity === selectedActivity })}
          onClick={() => setSelectedActivity(activity)}
          key={activity}
        >
          {activity}
        </button>
      ))}
    </div>
  );
};

Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedActivity: PropTypes.func.isRequired,
  selectedActivity: PropTypes.string,
};

Activities.defaultProps = {
  selectedActivity: PropTypes.string,
};
