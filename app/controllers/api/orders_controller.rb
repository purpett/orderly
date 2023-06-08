module Api 
  class OrdersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def show
      @restaurant = Restaurant.friendly.find(params[:restaurant_id])
      @order = @restaurant.orders.find(params[:id])
    end

    def create
      @restaurant = Restaurant.friendly.find(params[:slug])
      @order = @restaurant.orders.new(order_params)

      @order.save!
      render json: { id: @order.id }
    end

    private

    def order_params
      params.permit(:customer_name, :customer_email, :customer_phone, order_items_attributes: [:item_id])
    end
  end
end