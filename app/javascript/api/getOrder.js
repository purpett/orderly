import axios from 'axios';

export const getOrder = async (slug, orderId) => {
  const response = await axios.get(`/api/restaurants/${slug}/orders/${orderId}`, {
    headers: {
      'Accept': 'application/json', // tells the API that we want to receive JSON in response
    }
  });
  return response.data;
}