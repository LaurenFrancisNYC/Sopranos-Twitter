Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :characters, only: :index do
    resources :posts, only: [:create, :index]
  end
  resources :posts, except: :create
  put '/:id/upvote', to: 'posts#upvote_score'
  put '/:id/downvote', to: 'posts#downvote_score'
  resources :users, only: :create
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
