import { useState, useEffect } from "react";
import { createPayment } from "../api/createPayment";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm";

// Load Stripe with provided test publishable key
const stripePromise = loadStripe("pk_test_51NFL08ATrghIgROvjkDcVtxzzAv8SnbACaprN3EMHMDIdkyAZGmhOAJRZNbfO24EyimfSIot4mLxb9HnqYCFopof00aL6FkURT");

export default function StripeForm(props) {
  const [clientSecret, setClientSecret] = useState("")
  const { total } = props

  useEffect(() => {
    // Retrieve the client secret from the server to initiate the payment
    createPayment(total)
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
      {/* Render the Stripe payment form when the client secret is available */}
      {clientSecret !== "" && (
        <Elements options={options} stripe={stripePromise}>
          {/* Render the CheckoutForm component */}
          <CheckoutForm onSuccess={props.onSuccess} />
        </Elements>
      )}

    </div>
  )
}
