Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do
      # if i want an all ingredients show page do this:
      # (will also haveto update the ingredients index, and serializers to notrequire recipe_id)
      # resources :ingredients
      resources :recipes do
        resources :ingredients
      end
    end
  end
  
  
end

# fetch(`http://localhost:3000/api/v1/recipes/1/ingredients`)