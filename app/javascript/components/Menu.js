import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import MenuNavbar from "./MenuNavbar"
import { getRestaurant } from "../api/getRestaurant"
import MenuItems from "./MenuItems"

export default function Menu(props) {
  const [restaurantInfo, setRestaurantInfo] = useState({ menu: [] })
  const params = useParams()

  useEffect(() => {
    getRestaurant(params.slug).then(data => setRestaurantInfo(data))
  }, [])

  return (
    <div>
      <h1>{restaurantInfo.name}</h1>
      <MenuNavbar restaurantInfo={restaurantInfo} />
      <MenuItems
        restaurantInfo={restaurantInfo}
        addItemToOrder={props.addItemToOrder}
      />

      <Link to={`/order-at/${params.slug}/cart`}>Cart</Link>
    </div>
  )
}