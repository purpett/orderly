class OrdersController < ApplicationController
  before_action :authenticate_restaurant!, only: [:index, :show]

  def index
    @orders = current_restaurant.orders
  end

  def new
  end

  def show
    @order = current_restaurant.orders.find(params[:id])
  end
end
