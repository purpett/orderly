class OrderItemsController < ApplicationController
  def update
    @order_item = OrderItem.find(params[:id])
    @order_item.update(order_item_params)

    render status: :no_content, json: {}
  end

  private

  def order_item_params
    params.require(:order_item).permit(:done)
  end
end
