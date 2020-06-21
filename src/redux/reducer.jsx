import { getClubs } from '../api';

const GET_CLUBS = 'GET_CLUBS';

const initialState = {
  clubsList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLUBS:
      return {
        ...state,
        clubsList: action.payload,
      };

    default:
      return state;
  }
};

const setClubs = payload => ({
  type: GET_CLUBS,
  payload,
});

export const getClubsThunk = () => async(dispatch) => {
  const data = await getClubs();
  debugger;
  dispatch(setClubs(data));
};
