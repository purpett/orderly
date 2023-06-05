import { useState, useEffect } from "react"
import { getRestaurant } from "../api/getRestaurant"
import { useParams } from "react-router-dom"

export default function Receipt(props) {
  const [restaurantInfo, setRestaurantInfo] = useState({ menu: [] })
  const { order } = props
  const params = useParams()

  useEffect(() => {
    getRestaurant(params.slug).then(data => setRestaurantInfo(data))
  }, [])


  return (
    <div>
      <h1>Thank you for ordering with {restaurantInfo.name}</h1>
      <h2>Order n. {order.id} </h2>

      <div>

      </div>
    </div>
  )
}