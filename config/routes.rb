Rails.application.routes.draw do
  root 'spa#index'

  use_doorkeeper

  mount API => '/'

  get '*path', to: 'spa#index'
end
