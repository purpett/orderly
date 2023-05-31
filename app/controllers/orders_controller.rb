class OrdersController < ApplicationController
  before_action :authenticate_restaurant!
  
  def index
    @orders = current_restaurant.orders
  end

  def show
    @order = current_restaurant.orders.find(params[:id])
  end
end
