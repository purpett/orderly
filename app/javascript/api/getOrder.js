import axios from 'axios';

// function to get an order from the backend
export const getOrder = async (slug, orderId) => {
  const response = await axios.get(`/api/restaurants/${slug}/orders/${orderId}`, {
    headers: {
      'Accept': 'application/json', // tells the API that we want to receive JSON in response
    }
  });
  return response.data;
}