import { createOrder } from "../api/createOrder"
import formatCurrency from "../formatCurrency"
import { Link, useNavigate, useParams } from "react-router-dom"
import StripeForm from "./StripeForm"
import { useState, useRef } from "react"
import OrderItem from "./OrderItem"

export default function Order(props) {
  const [showCheckout, setShowCheckout] = useState(false)
  const { customerInfo, order, orderTotal } = props
  const navigate = useNavigate()
  const params = useParams()
  const ref = useRef(null)

  // function to clear the order and redirect to the menu (previous page)
  function clear() {
    props.clearOrder()

    navigate(-1)
  }

  // function to toggle the checkout form, and scroll to it when it appears
  const toggleCheckout = () => {
    setShowCheckout(!showCheckout)
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, 1000)
  }

  // function to submit the order to the backend by calling the createOrder api function
  async function submitOrder() {
    const createdOrder = await createOrder(params.slug, customerInfo, order)
    const orderId = createdOrder.id

    localStorage.clear()
    navigate(`/order-at/${params.slug}/receipts/${orderId}`)
  }

  // get the unique items in the order array
  const uniqueItems = [...new Set(order)]

  return (
    <div>
      <Link to={`/order-at/${params.slug}/menu`} className="mb-8 inline-block">
        &larr;
        Back to menu
      </Link>
      <h1 className="text-2xl font-semibold mb-10 mt-3">Your order</h1>

      <ul>
        {/* map over the unique items in the order array to render each item */}
        {uniqueItems.map((item, index) => {
          return (
            <OrderItem
              key={index}
              item={item}
              order={order}
              removeItemFromOrder={props.removeItemFromOrder}
              addItemToOrder={props.addItemToOrder}
              countItemInOrder={props.countItemInOrder}
            />
          )
        })}
      </ul>

      <div className="flex font-semibold mt-4 mb-8">
        <div>Total</div>
        {/* formatCurrency is a function that takes a number and returns a string in the format of a currency */}
        {/* orderTotal is a function that takes an array of items and returns the total price of the order */}
        <div className="ml-auto">{formatCurrency(orderTotal(order))}</div>
      </div>

      <div className="flex justify-between">
        <div className="cart-button" onClick={clear}>Empty cart</div>
        <div><div className="primary-button" onClick={toggleCheckout}>Checkout</div></div>
      </div>

      <div className="mt-20" ref={ref} >
        {showCheckout &&
          <StripeForm
            total={orderTotal(order)}
            onSuccess={submitOrder} />
        }
      </div>
    </div>
  )
}

// https://stripe.com/docs/testing for test card numbers.