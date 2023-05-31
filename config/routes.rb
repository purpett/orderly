Rails.application.routes.draw do
  devise_for :restaurants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"

  resources :menu_sections do
    resources :items
  end
end
