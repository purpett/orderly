class MenuSectionsController < ApplicationController
  before_action :authenticate_restaurant!

  def index
    @menu_sections = current_restaurant.menu_sections
  end
end