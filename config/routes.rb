Rails.application.routes.draw do
  root to: 'homes#top'
  resource :users, only:[:index, :show, :edit]
  resource :books, only:[:index, :show, :edit]
  get 'home/about' =>'homes#about'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
