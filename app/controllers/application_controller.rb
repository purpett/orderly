class ApplicationController < ActionController::Base
  # https://gist.github.com/withoutwax/46a05861aa4750384df971b641170407
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password, :location) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :email, :password, :current_password, :location, :phone_number) }
  end
end
