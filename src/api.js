const BASE_URL = 'https://instasport.co/dashboard/api/v1/clubs/';

export const getClubs = () => fetch(BASE_URL)
  .then(response => response.json());
