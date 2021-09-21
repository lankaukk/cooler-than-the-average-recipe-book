# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.destroy_all
Recipe.destroy_all

recipe1 = Recipe.create(name: "tacos", description: "eat this", date: Date.today)

ingredient = Ingredient.create(name: "tomato", recipe_id: recipe1.id, group: "vegetables")

# should not save because group is invalid
ingredient2 = Ingredient.create(name: "corn", recipe_id: recipe1.id, group: "v")

ingredient3 = Ingredient.create(name: "cilantro", recipe_id: recipe1.id, group: "vegetables")

ingredient4 = Ingredient.create(name: "chicken", recipe_id: recipe1.id, group: "protein")

# recipe1.ingredients = [ingredient, ingredient2]

