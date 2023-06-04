import axios from 'axios';

export const getRestaurant = async (slug) => {
  const response = await axios.get(`/api/restaurants/${slug}`, {
    headers: {
      'Accept': 'application/json', // tells the API that we want to receive JSON in response
    }
  });
  return response.data;
}