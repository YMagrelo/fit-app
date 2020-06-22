import PropTypes from 'prop-types';

export const clubsListPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title_short: PropTypes.string.isRequired,
    city: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    activity: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
).isRequired;

export const clubPropTypes = PropTypes.shape({
  title_short: PropTypes.string.isRequired,
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}).isRequired;
