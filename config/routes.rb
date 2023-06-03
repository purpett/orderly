Rails.application.routes.draw do
  devise_for :restaurants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "restaurants#show"

  resources :menu_sections do
    resources :items
  end

  resources :orders, only: %i[index show]

  get "/restaurants", to: "restaurants#show"
  get "/order-at/:slug", as: :order_at, to: "pages#index" # TODO

  # For apis

  namespace :api do
    resources :restaurants, :orders
  end
end
