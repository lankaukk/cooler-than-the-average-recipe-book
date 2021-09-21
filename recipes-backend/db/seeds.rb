# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

recipe = Recipe.create(name: "Tacos", description: "eat!", date: Date.today)

ingredient = Ingredient.create(name: "tomato", recipe_id: 1, group: "vegetables")

