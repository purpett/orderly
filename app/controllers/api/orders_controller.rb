module Api
  class OrdersController < ApplicationController
    skip_before_action :verify_authenticity_token

    # GET /api/restaurants/:restaurant_id/orders/:id
    def show
      # Find the restaurant based on the slug
      @restaurant = Restaurant.friendly.find(params[:restaurant_id])
      # Find the specific order within the restaurant
      @order = @restaurant.orders.find(params[:id])
    end

    # POST /api/restaurants/:slug/orders
    def create
      @restaurant = Restaurant.friendly.find(params[:slug])
      @order = @restaurant.orders.new(order_params)

      @order.save!
      render json: { id: @order.id }
    end

    private

    # Define the allowed parameters for creating an order
    def order_params
      params.permit(:customer_name, :customer_email, :customer_phone, order_items_attributes: [:item_id])
    end
  end
end
