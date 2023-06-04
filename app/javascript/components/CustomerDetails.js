import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CustomerDetails(props) {

  const { customerInfo, setCustomerInfo } = props

  const navigate = useNavigate()
  const params = useParams()

  function handleInputChange(e) {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value })
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    navigate(`/order-at/${params.slug}/menu`)
  }

  return (
    <div>
      <h1>WELCOME TO</h1>
      <h2>restaurant_name</h2>

      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            required
            autoFocus={true}
          />
        </div>
        <div>
          <label>Your email</label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Your phone number</label>
          <input
            type="text"
            name="phone"
            value={customerInfo.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button onClick={handleOnSubmit}>Proceed to menu</button>
      </form>

    </div>
  )
}