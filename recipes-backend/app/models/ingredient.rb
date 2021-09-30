class Ingredient < ApplicationRecord
    belongs_to :recipe
    validates :name, presence: true

    validates_inclusion_of :group, :in => ['dairy', 'fruits', 'vegetables', 'grains', 'protein', 'fats', 'seasoning', 'condiments', 'other']
end

