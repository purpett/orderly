import { createOrder } from "../api/createOrder"
import formatCurrency from "../formatCurrency"
import { useNavigate, useParams } from "react-router-dom"

export default function Order(props) {
  const { customerInfo, order } = props
  const navigate = useNavigate()
  const params = useParams()

  const total = order.reduce((total, item) => {
    return total + item.price
  }, 0)

  function clear() {
    props.clearOrder()
    navigate(-1)
  }

  function submitOrder() {
    createOrder(params.slug, customerInfo, order)
  }

  return (
    <div>
      <ul>
        {order.map((item, index) => (
          <li key={index} className="flex border-b py-3">
            <div>
              <h3>{item.name}</h3>
              <p class="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="ml-auto">
              {formatCurrency(item.price)}
              <button onClick={() => props.removeItemFromOrder(item)} className="ml-3 text-sm text-red-500">Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex font-semibold mt-4 mb-8">
        <div>Total</div>
        <div className="ml-auto">{formatCurrency(total)}</div>
      </div>

      <div className="mb-4"><div className="primary-button" onClick={submitOrder}>Checkout</div></div>
      <div className="cart-button" onClick={clear}>Empty cart</div>
    </div>
  )
}