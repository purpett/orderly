import axios from "axios";

// function to create a payment intent on the backend
export const createPayment = async (total) => {
  const response = await axios.post("/api/payments",
    {
      total: total
    }, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}