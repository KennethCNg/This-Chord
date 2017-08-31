Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
   resource :session, only: [:create, :destroy]
   resources :users, only: [:create, :index]
   resources :messages, only: [:index, :create, :destroy]
   resources :chatrooms, only: [:show, :index, :create, :destroy]
   resources :memberships, only: [:index, :create]
 end
end
