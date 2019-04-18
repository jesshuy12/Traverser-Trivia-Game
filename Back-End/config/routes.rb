Rails.application.routes.draw do
  resources :questions, only: [:index, :show]
  resources :statistics, only: [:create, :index]
end
