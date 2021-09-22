class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :group, :recipe_id
  belongs_to :recipe
end
