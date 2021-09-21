class Recipe < ApplicationRecord
    has_many :ingredients
    validates :name, :description, presence: true
end
