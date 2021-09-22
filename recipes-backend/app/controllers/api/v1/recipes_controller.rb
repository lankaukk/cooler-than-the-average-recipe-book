class Api::V1::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render json: @recipe
        else 
            render json: {error: "Error creating recipe"}
        end
    end 

    def show 
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end

    def destroy_all
        @recipe = Recipe.find(params[:id])
        @recipe.destroy 
    end

    private 

    def recipe_params
        params.require(:recipe).permit(:name, :description, :ingredients, :date)
    end
end
