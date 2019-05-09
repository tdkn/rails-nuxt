require 'doorkeeper/grape/helpers'

class API < Grape::API
  prefix 'api'
  version 'v1', using: :path
  format :json

  helpers Doorkeeper::Grape::Helpers

  # Global before guard
  before do
    doorkeeper_authorize! unless route.settings.dig(:auth, :disabled)
  end

  mount Acme::Ping
end
