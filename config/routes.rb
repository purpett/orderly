Rails.application.routes.draw do
  devise_for :restaurants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  devise_scope :restaurant do
    root to: "devise/sessions#new"
  end

  resources :menu_sections do
    resources :items
  end

  resources :orders, only: %i[index show]

  get "/restaurants", to: "restaurants#show"
  get "/order-at/:slug", as: :order_at, to: "pages#index" # TODO
end
