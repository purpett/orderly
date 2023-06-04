import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import MenuNavbar from "./MenuNavbar"
import { getRestaurant } from "../api/getRestaurant"
import MenuItems from "./MenuItems"
import formatCurrency from "../formatCurrency"

export default function Menu(props) {
  const [restaurantInfo, setRestaurantInfo] = useState({ menu: [] })
  const params = useParams()

  useEffect(() => {
    getRestaurant(params.slug).then(data => setRestaurantInfo(data))
  }, [])

  function orderTotal() {
    return props.order.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-10 text-center">{restaurantInfo.name}</h1>
      <div className="flex justify-end mb-10">
        <Link to={`/order-at/${params.slug}/cart`} className="cart-button">Cart {formatCurrency(orderTotal())}</Link>
      </div>
      <MenuNavbar restaurantInfo={restaurantInfo} />
      <MenuItems
        restaurantInfo={restaurantInfo}
        addItemToOrder={props.addItemToOrder}
        order={props.order}
      />
    </div>
  )
}