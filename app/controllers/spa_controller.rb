class SpaController < ActionController::Base
  def index
    render file: File.join(Rails.public_path, '_nuxt/index.html')
  end
end
