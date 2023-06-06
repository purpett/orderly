import axios from "axios";

export const createPayment = async (total) => {
  const response = await axios.post("/api/payments",
    {
      total: total
    }, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}