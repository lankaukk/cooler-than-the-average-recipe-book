class Recipe < ApplicationRecord
    has_many :ingredients
    validates :name, :description, presence: true

    def add_ingredient(ingredient)
        self.ingredients.push(ingredient)
        self.save
    end

    def formatted
        self['created_at'].strftime("%b %d, %Y")
    end
end
