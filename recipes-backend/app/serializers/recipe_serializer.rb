class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :ingredients, :date
  has_many :ingredients
end
