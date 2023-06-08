module Api
  class PaymentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # POST /api/payments
    def create
      # Create a PaymentIntent with the provided amount and currency
      payment_intent = Stripe::PaymentIntent.create(
        amount: (params[:total] * 100).to_i, # Convert the total amount to integer, in cents
        currency: 'gbp',
        automatic_payment_methods: {
          enabled: true,
        },
      )

      # Render the JSON response with the client secret of the PaymentIntent
      render json: {
        client_secret: payment_intent['client_secret']
      }
    end

    private
    def payment_params
      params.require(:payment).permit(:total)
    end
  end
end
