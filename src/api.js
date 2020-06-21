const BASE_URL = '/dashboard/api/v1/clubs/';

export const getClubs = () => {
  fetch(BASE_URL)
    .then(response => response.json);
};
