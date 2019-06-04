class SpaController < ActionController::Base
  def index
    render file: File.join(Rails.public_path, 'index.html')
  end
end
