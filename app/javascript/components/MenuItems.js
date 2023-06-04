import React from "react"
import formatCurrency from "../formatCurrency"

export default function MenuItems(props) {
  const { restaurantInfo, addItemToOrder, order } = props

  function add(item) {
    addItemToOrder(item)
  }

  function countItemInOrder(item) {
    const count = order.filter(orderItem => orderItem.id === item.id).length
    return count > 0 ? `${count}x` : null
  }

  function isItemInOrder(item) {
    return order.find(orderItem => orderItem.id === item.id)
  }

  return (
    <div>
      {restaurantInfo.menu.map((section, index) => (
        <div key={index} id={`section-${section.id}`} className="mb-3">
          <h2 className="text-xl font-semibold text-center">{section.name}</h2>
          <ul>
            {section.items.map((item, index) => (
              <li key={index} onClick={() => add(item)} className={`flex py-5 border-b cursor-pointer`}>
                <div className={`${isItemInOrder(item) ? "border-l border-l-2 pl-2" : ""}`}>
                  <h3 className="font-semibold">{countItemInOrder(item)} {item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                <p className="ml-auto">{formatCurrency(item.price)}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}