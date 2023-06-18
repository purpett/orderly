module Api
  class RestaurantsController < ApplicationController
    def show
      @restaurant = Restaurant.friendly.find(params[:id])
    end
  end
end
