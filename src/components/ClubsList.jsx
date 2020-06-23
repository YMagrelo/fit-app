import React from 'react';
import './ClubsList.scss';
import PropTypes from 'prop-types';

import { clubsListPropTypes, clubPropTypes } from '../propTypesConstant';

export const ClubsList = (props) => {
  const { clubsList } = props;

  return (
    <div className="list">

      {clubsList.map(club => (
        <Club club={club} key={club.title} />
      ))}

    </div>
  );
};

const Club = (props) => {
  const { club } = props;

  return (
    <div className="item" key={club.title}>
      <a href={club.link} className="item__link">
        <img src={club.logo} alt="club logo" className="item__logo" />
      </a>
      <p className="item__title">{club.title_short}</p>
    </div>
  );
};

ClubsList.propTypes = {
  clubsList: clubsListPropTypes,
};

Club.propTypes = {
  club: clubPropTypes,
};

ClubsList.defaultProps = {
  clubsList: PropTypes.array,
};

Club.defaultProps = {
  club: PropTypes.object,
};
