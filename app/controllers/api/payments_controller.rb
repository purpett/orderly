module Api
  class PaymentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      # Create a PaymentIntent with amount and currency
      payment_intent = Stripe::PaymentIntent.create(
        amount: (params[:total] * 100).to_i,
        currency: 'gbp',
      )

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
