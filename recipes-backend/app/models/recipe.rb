class Recipe < ApplicationRecord
    has_many :ingredients
    validates :name, :description, presence: true

    def add_ingredient(ingredient)
        self.ingredients.push(ingredient)
        self.save
    end

    def formatted(created_at)
        attributes['created_at'].strftime("%b %d, %Y")
        super.merge('created_at' => self.created_at.strftime("%d %b %Y"))
    end

    def to_json(created_at)
        super.merge('created_at' => self.created_at.strftime("%d %b %Y"))
      end
end
