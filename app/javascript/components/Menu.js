import React from "react"
import MenuNavbar from "./MenuNavbar"
import { AppContext } from "./Context"

export default function Menu() {
  const { restaurantInfo, setRestaurantInfo } = useContext(AppContext)

  return (
    <div>
      <h1>{restaurantInfo.name}</h1>
      <MenuNavbar />
    </div>
  )
}