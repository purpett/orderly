import axios from 'axios';

// function to create an order
export const createOrder = async (slug, customerInfo, order) => {
  // send a POST request to the `api/orders` endpoint with order details
  const response = await axios.post(`/api/orders`,
    {
      slug: slug,
      customer_name: customerInfo.name,
      customer_email: customerInfo.email,
      customer_phone: customerInfo.phone,
      order_items_attributes: order.map(item => {
        return { item_id: item.id }
      })
    }, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}