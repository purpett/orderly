import { useState, useEffect } from "react"
import { getRestaurant } from "../api/getRestaurant"
import { getOrder } from "../api/getOrder"
import { useParams } from "react-router-dom"

export default function Receipt(props) {
  const [restaurantInfo, setRestaurantInfo] = useState({ menu: [] })
  const [order, setOrder] = useState({ items: [] })
  const params = useParams()

  useEffect(() => {
    getRestaurant(params.slug).then(data => setRestaurantInfo(data))
  }, [])

  useEffect(() => {
    getOrder(params.slug, params.orderId).then(data => setOrder(data))
  }, [])


  return (
    <div>
      <h1>Thank you for ordering with {restaurantInfo.name}</h1>
      <h2>Order n. {order.id} </h2>
      <div>
        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Total: {props.orderTotal(order)}</h3>
      </div>
    </div>
  )
}