Rails.application.routes.draw do
  use_doorkeeper

  mount API => '/'
end
