class Api::V1::IngredientsController < ApplicationController
    before_action :set_recipe

    def index
        # if i want an all ingredients show page
        # if @recipe
        #     @ingredients = @recipe.ingredients
        # else
        #     @ingredients = Ingredient.all
        # end

        @ingredients = @recipe.ingredients
        render json: @ingredients
    end

    def show 
        # @ingredient = @recipe.ingredients.find_by(id: params[:id])
        @ingredient = Ingredient.find(params[:id])
        render json: @ingredient
    end

    def create
        @ingredient =  @recipe.ingredients.new(ingredient_params)
        # if the ingredient is added to the recipe's ingredient's array? save the ingredient
        if @recipe.add_ingredient(@ingredient)
            @ingredient.save
            render json: @ingredient
        else
            render json: {error: "Error creating ingredient"}
        end
    end 

    def destroy_all
        
    end

    private 

    def set_recipe
        @recipe = Recipe.find(params[:recipe_id])
    end

    def ingredient_params
        params.require(:ingredient).permit(:name, :recipe_id, :group)
    end
    
end
