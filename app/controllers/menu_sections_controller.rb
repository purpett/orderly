class MenuSectionsController < ApplicationController
  before_action :authenticate_restaurant!
  before_action :load_menu_section, only: %i[edit update destroy]

  def index
    @menu_sections = current_restaurant.menu_sections
  end

  def new
    @menu_section = current_restaurant.menu_sections.build
  end

  def create
    @menu_section = current_restaurant.menu_sections.build(menu_section_params)
    if @menu_section.save
      redirect_to menu_sections_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @menu_section.update(menu_section_params)
      redirect_to menu_sections_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @menu_section.destroy
    redirect_to menu_sections_path
  end

  private

  def menu_section_params
    params.require(:menu_section).permit(:name)
  end

  def load_menu_section
    @menu_section = current_restaurant.menu_sections.find(params[:id])
  end
end