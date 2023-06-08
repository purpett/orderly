import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import CustomerDetails from "./CustomerDetails"
import Menu from "./Menu"
import Order from "./Order"
import Receipt from "./Receipt"

// This function will load the customer info from localStorage
function loadCustomerInfo() {
  const customerInfo = JSON.parse(localStorage.getItem("customerInfo"))

  // If there is customer info in localStorage, return it
  if (customerInfo) {
    return customerInfo
  }

  // Otherwise, return an empty object
  return {
    name: "",
    email: "",
    phone: ""
  }
}

// This function will load the order from localStorage
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

  // Save the order info to localStorage on loading and whenever it changes
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order))
  }, [order])

  // Save the customer info to localStorage on loading and whenever it changes
  useEffect(() => {
    localStorage.setItem("customerInfo", JSON.stringify(customerInfo))
  }, [customerInfo])

  // Adds item to order by spreading the existing order and adding the new item
  function addItemToOrder(item) {
    setOrder([...order, item])
  }

  // Counts the number of times an item appears in the order
  function countItemInOrder(item) {
    const count = order.filter(orderItem => orderItem.id === item.id).length
    return count > 0 ? `${count}x` : null
  }

  // Removes an item from the order by filtering it out and re-setting the order state
  function removeItemFromOrder(item) {
    const index = order.findIndex(orderItem => orderItem.id === item.id)
    const newOrder = [...order]
    newOrder.splice(index, 1)
    setOrder(newOrder)
  }

  // Clears the order from localStorage and resets the order state
  function clearOrder() {
    localStorage.removeItem("order")
    setOrder([])
  }

  // This order argument must be the array of items
  // This function will return the total price of the order 
  // by using the reduce method to add up the price of each item
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