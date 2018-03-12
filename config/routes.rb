Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :bookshelves, only: [:index, :create, :show, :update, :destroy]
    end
    resources :books, only: [:index, :show] do
      resources :bookshelf_memberships, only: [:create, :update, :destroy]
    end
  end


  root 'static_pages#root'
end
