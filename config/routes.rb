Rails.application.routes.draw do

  resources :categories
  resources :follows
  devise_for :users
  
  resources :posts do
    resources :commentts
    resources :likes
    resources :users
    resources :favorites
  
end


  
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  
  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show', :as => :user 
  delete 'users/:id', to: 'users#destroy'
  
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
	post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  get 'admin/index'
  get 'main/index'
	get 'posts/index'

  
  root 'posts#index'
  
 
  
end
