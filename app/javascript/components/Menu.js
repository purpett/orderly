import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MenuNavbar from "./MenuNavbar"
import { getRestaurant } from "../api/getRestaurant"

export default function Menu() {
  const [restaurantInfo, setRestaurantInfo] = useState({ menu: [] })
  const params = useParams()

  useEffect(() => {
    getRestaurant(params.slug).then(data => setRestaurantInfo(data))
  }, [])

  return (
    <div>
      <h1>{restaurantInfo.name}</h1>
      <MenuNavbar restaurantInfo={restaurantInfo} />
    </div>
  )
}