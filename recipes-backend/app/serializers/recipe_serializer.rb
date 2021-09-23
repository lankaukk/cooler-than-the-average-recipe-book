class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :ingredients, :created_at
  has_many :ingredients 
end
