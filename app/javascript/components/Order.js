import { createOrder } from "../api/createOrder"
import formatCurrency from "../formatCurrency"
import { Link, useNavigate, useParams } from "react-router-dom"
import StripeForm from "./StripeForm"

export default function Order(props) {
  const { customerInfo, order, orderTotal } = props
  const navigate = useNavigate()
  const params = useParams()

  function clear() {
    props.clearOrder()

    navigate(-1)
  }

  async function submitOrder() {
    const createdOrder = await createOrder(params.slug, customerInfo, order)
    const orderId = createdOrder.id

    localStorage.clear()
    navigate(`/order-at/${params.slug}/receipts/${orderId}`)
  }

  return (
    <div>
      <Link to={`/order-at/${params.slug}/menu`} className="mb-8 inline-block">
        &larr;
        Back to menu
      </Link>
      <ul>
        {order.map((item, index) => (
          <li key={index} className="flex border-b py-3 gap-4">
            <div className="flex-1">
              <h3>{item.name}</h3>
              <p className="text-sm text-gray-500 break-words">{item.description}</p>
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
        <div className="ml-auto">{formatCurrency(orderTotal(order))}</div>
      </div>

      <div className="flex justify-between">
        <div className="cart-button" onClick={clear}>Empty cart</div>
        {/* <div><div className="primary-button" onClick={submitOrder}>Checkout</div></div> */}
      </div>

      <StripeForm
        total={orderTotal(order)}
        onSuccess={submitOrder} />
    </div>
  )
}

// https://stripe.com/docs/testing for test card numbers.