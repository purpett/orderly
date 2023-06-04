import React from "react"

export default function MenuItems(props) {
  const { restaurantInfo } = props

  return (
    <div>
      {restaurantInfo.menu.map((section, index) => (
        <div key={index}>
          <h2>{section.name}</h2>
          <ul>
            {section.items.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}