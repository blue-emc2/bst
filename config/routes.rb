Rails.application.routes.draw do
  root "articles#index"

  resources :articles

  get "/sample", to: "articles#sample"
end
