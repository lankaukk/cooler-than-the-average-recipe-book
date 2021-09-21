class Recipe < ApplicationRecord
    has_many :ingredients
    validates :name, :description, presence: true

    def add_ingredient(ingredient)
        self.ingredients = self.ingredients + ingredient
        self.save
    end
end
