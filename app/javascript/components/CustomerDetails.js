import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getRestaurant } from '../api/getRestaurant'

export default function CustomerDetails(props) {
  const { customerInfo, setCustomerInfo } = props
  const [restaurantInfo, setRestaurantInfo] = useState({ menu: [] })

  const navigate = useNavigate()
  const params = useParams()

  function handleInputChange(e) {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value })
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    navigate(`/order-at/${params.slug}/menu`)
  }

  // Here because cannot use useParams in useEffect outside of Router in App. Temporary solution.
  // gets the restaurant information from the API, stores into data variable, and sets the restaurantInfo state to the data variable
  useEffect(() => {
    getRestaurant(params.slug).then(data => setRestaurantInfo(data))
  }, [])


  return (
    <div>
      <h1
        className="text-3xl font-semibold mb-10 text-center">
        <div className="uppercase mb-6">Welcome to</div>
        <div>{restaurantInfo.name}</div>
      </h1>

      <form onSubmit={handleOnSubmit} className='space-y-6'>
        <div>
          <label className="form-label">Your name</label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            className="form-input"
            required
            autoFocus={true}
          />
        </div>
        <div>
          <label className="form-label">Your email</label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="form-label">Your phone number</label>
          <input
            type="text"
            name="phone"
            value={customerInfo.phone}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <button
          type="submit"
          className="primary-button">Start your order</button>
      </form>

    </div>
  )
}