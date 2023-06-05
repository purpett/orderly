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

  def update
    @order = current_restaurant.orders.find(params[:id])

    if @order.update(order_params)
      redirect_to @order
    end
  end

  private

  def order_params
    params.require(:order).permit(:completed)
  end
end
