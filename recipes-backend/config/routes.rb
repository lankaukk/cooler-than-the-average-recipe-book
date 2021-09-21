Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do
      resources :ingredients
      resources :recipes
    end
  end
  
  
end

# fetch(`http://localhost:3000/api/v1/ingredients`)