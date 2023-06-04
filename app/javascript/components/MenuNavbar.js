import React from "react"
import { Link, useParams } from "react-router-dom";

export default function MenuNavbar(props) {
  const { restaurantInfo } = props
  const params = useParams()

  return (
    <div>
      {restaurantInfo.menu.map((section, index) => {
        return (
          <li key={index}>
            <a href={`#section-${section.id}`}>{section.name}</a>
          </li>
        )
      })}
    </div>
  )
}