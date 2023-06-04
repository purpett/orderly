import axios from 'axios';

export const createOrder = async (slug, customerInfo, order) => {
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