class ItemsController < ApplicationController
  before_action :authenticate_restaurant!
  before_action :load_menu_section
  before_action :load_item, only: %i[edit update destroy]

  def index
    @items = current_restaurant.items
  end

  def new
    @item = current_restaurant.items.build
  end

  def create
    @item = current_restaurant.items.build(item_params)
    if @item.save
      redirect_to menu_sections_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      redirect_to menu_sections_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @item.destroy
    redirect_to menu_sections_path
  end

  private

  def item_params
    params.require(:item).permit(:name, :description, :price, :menu_section_id)
  end

  def load_menu_section
    @menu_section = current_restaurant.menu_sections.find(params[:menu_section_id])
  end

  def load_item
    @item = @menu_section.items.find(params[:id])
  end
end