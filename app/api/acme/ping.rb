module Acme
  class Ping < Grape::API
    desc 'Returns pong.'
    route_setting :auth, disabled: true
    get :ping do
      { ping: params[:pong] || 'pong' }
    end
  end
end
