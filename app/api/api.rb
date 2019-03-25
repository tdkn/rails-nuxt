class API < Grape::API
  prefix 'api'
  version 'v1', using: :path
  format :json

  mount Acme::Ping
end
