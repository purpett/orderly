import React from "react"
import { Link } from "react-router-dom";
import { AppContext } from "./Context"

export default function MenuNavbar() {
  const { restaurantInfo, setRestaurantInfo } = useContext(AppContext)

  return (
    <div>
      {restaurantInfo.menu_sections.map((section, index) => {
        return (
          <li>
            <Link to={`/order-at/${params.slug}/menu/${section.id}`}>{section.name}</Link>
          </li>
        )
      })}
    </div>
  )
}