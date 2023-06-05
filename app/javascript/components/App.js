import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import CustomerDetails from "./CustomerDetails"
import Menu from "./Menu"
import Order from "./Order"

function loadCustomerInfo() {
  const customerInfo = JSON.parse(localStorage.getItem("customerInfo"))

  if (customerInfo) {
    return customerInfo
  }

  return {
    name: "",
    email: "",
    phone: ""
  }
}

function loadOrder() {
  const order = JSON.parse(localStorage.getItem("order"))

  if (order) {
    return order
  }

  return []
}

export default function App() {
  const [customerInfo, setCustomerInfo] = useState(loadCustomerInfo())
  const [order, setOrder] = useState(loadOrder())

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order))
  }, [order])

  useEffect(() => {
    localStorage.setItem("customerInfo", JSON.stringify(customerInfo))
  }, [customerInfo])

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