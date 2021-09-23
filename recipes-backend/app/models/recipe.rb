class Recipe < ApplicationRecord
    has_many :ingredients
    validates :name, :description, presence: true

    def add_ingredient(ingredient)
        self.ingredients = self.ingredients + ingredient
        self.save
    end

    # def date
    #     attributes['date'].strftime("%b %d, %Y")
    #   end
end
