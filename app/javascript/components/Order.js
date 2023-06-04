import React from 'react'

export default function Order(props) {
  const { order } = props

  const total = order.reduce((total, item) => {
    return total + item.price
  }, 0)

  return (
    <div>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>

      <div>Total: {total}</div>
    </div>
  )
}