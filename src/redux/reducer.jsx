import { getClubs } from '../api';

const SET_CLUBS = 'SET_CLUBS';
const SET_CITIES = 'SET_SITIES';

const initialState = {
  clubsList: [],
  cities: [],
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

export const getClubsThunk = () => async(dispatch) => {
  const data = await getClubs();

  dispatch(setClubs(data));
  const setOfCities = new Set(data.map(club => club.city.title));
  const cities = [...setOfCities];

  dispatch(setCities(cities));
};
