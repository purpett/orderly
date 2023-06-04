import React from "react"

export default function MenuItems(props) {
  const { restaurantInfo, addItemToOrder } = props

  function add(item) {
    addItemToOrder(item)
  }

  return (
    <div>
      {restaurantInfo.menu.map((section, index) => (
        <div key={index} id={`section-${index}`}>
          <h2>{section.name}</h2>
          <ul>
            {section.items.map((item, index) => (
              <li key={index} onClick={() => add(item)}>
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