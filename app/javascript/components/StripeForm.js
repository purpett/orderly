import { useState, useEffect } from "react";
import { createPayment } from "../api/createPayment";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51NFL08ATrghIgROvjkDcVtxzzAv8SnbACaprN3EMHMDIdkyAZGmhOAJRZNbfO24EyimfSIot4mLxb9HnqYCFopof00aL6FkURT");

export default function StripeForm(props) {
  const [clientSecret, setClientSecret] = useState("")
  const { total } = props

  useEffect(() => {
    createPayment(total * 100)
      .then(paymentIntent => setClientSecret(paymentIntent.client_secret))
  }, [total])

  const options = {
    clientSecret: clientSecret,
    appearance: {
      theme: "stripe",
    }
  }

  return (
    <div>
      {clientSecret !== "" && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}

    </div>
  )
}
