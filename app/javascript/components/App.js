import React, { useState, useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import CustomerDetails from "./CustomerDetails"
import Menu from "./Menu"
import Order from "./Order"

export default function App() {
  const [customerInfo, setCustomerInfo] = useState({})

  return (
    <div>
      <Routes>
        <Route path="order-at/:slug" element={<CustomerDetails customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />} />
        <Route path="order-at/:slug/menu" element={<Menu />} />
        <Route path="order-at/:slug/cart" element={<Order />} />
      </Routes>
    </div>
  )
}