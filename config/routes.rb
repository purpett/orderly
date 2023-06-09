Rails.application.routes.draw do
  devise_for :restaurants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "restaurants#show"

  resources :menu_sections do
    resources :items
  end

  resources :orders, only: %i[index show update]
  resources :order_items, only: %i[update]

  get "/restaurants", to: "restaurants#show"
  get "/order-at/:slug", as: :order_at, to: "orders#new"
  get "/order-at/:slug/menu", to: "orders#new"
  get "/order-at/:slug/cart", to: "orders#new"
  get "/order-at/:slug/receipts/:orderId", to: "orders#new"

  # For apis

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: :show do
      resources :orders, only: :show
    end
    resources :orders, only: :create
    resources :payments, only: :create
  end
end
