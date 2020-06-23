import { getClubs } from '../api';

const SET_CLUBS = 'SET_CLUBS';
const SET_CITIES = 'SET_SITIES';
const SET_ACTIVITIES = 'SET_ACTIVITIES';

const initialState = {
  clubsList: [],
  cities: [],
  activities: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLUBS:
      return {
        ...state,
        clubsList: action.payload,
      };

    case SET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };

    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
};

const setClubs = payload => ({
  type: SET_CLUBS,
  payload,
});

const setCities = payload => ({
  type: SET_CITIES,
  payload,
});

const setActivities = payload => ({
  type: SET_ACTIVITIES,
  payload,
});

export const getClubsThunk = () => async(dispatch) => {
  const data = await getClubs();

  dispatch(setClubs(data));

  // set unique value of cities
  const cities = [...new Set(data.map(club => club.city.title))];

  // set unique value of activities
  const activities = [...new Set(data
    .map(club => club.activity
      .map(activity => activity.slug))
    .flat())];

  dispatch(setCities(cities));
  dispatch(setActivities(activities));
};
