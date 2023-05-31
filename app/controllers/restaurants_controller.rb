class RestaurantsController < ApplicationController
  before_action :authenticate_restaurant!

  def show
    @restaurant = current_restaurant
  end
end
