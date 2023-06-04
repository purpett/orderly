import React, { useState, useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import CustomerDetails from "./CustomerDetails"
import Menu from "./Menu"
import Order from "./Order"

export default function App() {
  const [customerInfo, setCustomerInfo] = useState({})
  const [order, setOrder] = useState([])

  function addItemToOrder(item) {
    setOrder([...order, item])
  }

  function removeItemFromOrder(item) {
    const index = order.findIndex(orderItem => orderItem.id === item.id)
    const newOrder = [...order]
    newOrder.splice(index, 1)
    setOrder(newOrder)
  }

  function clearOrder() {
    setOrder([])
  }

  return (
    <div className="max-w-sm mx-auto py-8 px-3">
      <Routes>
        <Route path="order-at/:slug" element={<CustomerDetails customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />} />
        <Route path="order-at/:slug/menu" element={<Menu order={order} addItemToOrder={addItemToOrder} />} />
        <Route
          path="order-at/:slug/cart"
          element={
            <Order
              order={order}
              customerInfo={customerInfo}
              removeItemFromOrder={removeItemFromOrder}
              clearOrder={clearOrder} />
          } />
      </Routes>
    </div>
  )
}