import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import CustomerDetails from "./CustomerDetails"
import Menu from "./Menu"
import Order from "./Order"
import Receipt from "./Receipt"

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

  function countItemInOrder(item) {
    const count = order.filter(orderItem => orderItem.id === item.id).length
    return count > 0 ? `${count}x` : null
  }

  function removeItemFromOrder(item) {
    const index = order.findIndex(orderItem => orderItem.id === item.id)
    const newOrder = [...order]
    newOrder.splice(index, 1)
    setOrder(newOrder)
  }

  function clearOrder() {
    localStorage.removeItem("order")
    setOrder([])
  }

  // This order argument must be the array of items
  function orderTotal(order) {
    return order.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div className="max-w-lg mx-auto py-8 px-3">
      <Routes>
        <Route path="order-at/:slug"
          element={
            <CustomerDetails
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
            />
          }
        />
        <Route path="order-at/:slug/menu"
          element={
            <Menu
              order={order}
              addItemToOrder={addItemToOrder}
              orderTotal={orderTotal}
              countItemInOrder={countItemInOrder}
            />
          }
        />
        <Route
          path="order-at/:slug/cart"
          element={
            <Order
              order={order}
              customerInfo={customerInfo}
              addItemToOrder={addItemToOrder}
              removeItemFromOrder={removeItemFromOrder}
              clearOrder={clearOrder}
              orderTotal={orderTotal}
              countItemInOrder={countItemInOrder}
            />
          }
        />
        <Route
          path="order-at/:slug/receipts/:orderId"
          element={
            <Receipt
              order={order}
              customerInfo={customerInfo}
              orderTotal={orderTotal}
            />
          }
        />
      </Routes>
    </div>
  )
}