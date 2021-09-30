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

    def destroy
        @recipe = Recipe.find(params[:id])
        @recipe.destroy 
        @recipes = Recipe.all
        render json: @recipes   
    end

    def update
        @recipe = Recipe.find(params[:id])
        @recipe.update(name: params["recipe"]["name"], description: params["recipe"]["description"])
        @recipe.save
        render json: @recipe
    end

    private 

    def recipe_params
        params.require(:recipe).permit(:name, :description, :ingredients, :created_at)
    end
end
