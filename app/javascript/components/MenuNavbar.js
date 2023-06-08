import React from "react"

export default function MenuNavbar(props) {
  const { restaurantInfo } = props

  return (
    <ul className="flex whitespace-nowrap overflow-x-auto space-x-5 text-sm font-semibold mb-8">
      {restaurantInfo.menu.map((section, index) => {
        return (
          <li key={index} className="menu-tab-button">
            <a href={`#section-${section.id}`}>{section.name}</a>
          </li>
        )
      })}
    </ul>
  )
}
