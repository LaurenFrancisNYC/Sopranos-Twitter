Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :characters, only: :index
  resources :posts
  resources :users, only: :create
  post '/posts/:post_id/characters/:id', to: 'characters#add_character'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
