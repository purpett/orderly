import { useState, useEffect } from "react"
import { getRestaurant } from "../api/getRestaurant"
import { getOrder } from "../api/getOrder"
import { useParams } from "react-router-dom"
import formatCurrency from "../formatCurrency"

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
      <h1 className="mt-0 mb-10 text-2xl font-semibold text-gray-900 text-center">Thank you for ordering with <div className="text-3xl mt-6">{restaurantInfo.name}</div></h1>
      <h2 className="text-2xl text-black-600 text-start mb-10">Order n. {order.id} </h2>
      <div class="max-w-lg mx-auto">
        {console.log(order)}
        <ul>
          {order.items.map((item, index) => (
            <li key={index} className="flex border-b py-3">
              <h3>{item.name}</h3>
              <p className="ml-auto">{formatCurrency(item.price)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex border-t py-3">
        <div className="font-bold">Total:</div>
        <div className="ml-auto font-bold">
          {formatCurrency(props.orderTotal(order.items))}
        </div>
      </div>

      <div className="mt-10 text-lg font-semibold mb-6">
        Restaurant Info
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <div>
          Email: {restaurantInfo.email}
        </div>
        {restaurantInfo.phone_number && <div>
          Phone number: {restaurantInfo.phone_number}
        </div>}
        {restaurantInfo.location && <div>
          Location: {restaurantInfo.location}
        </div>}
      </div>
    </div>
  )
}