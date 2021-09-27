class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :ingredients, :created_at, :formatted
  has_many :ingredients 
end
