// responsible for updating the parts of the store that have to do with recipes
export default function recipeReducer( state = {recipes: []}, action ){
//consider added filesof consts for the cases
    switch (action.type) {
        case "FETCH_RECIPES":
            return {recipes: action.payload};
        case "ADD_RECIPE":
            return {...state, recipes: [...state.recipes, action.payload]};
        case "ADD_INGREDIENT":
            let recipes = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: recipes};
        case "DELETE_INGREDIENT":
            let recipesTwo = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: recipesTwo};
        case "EDIT_RECIPE":
            let recipesThree = state.recipes.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return {...state, recipes: recipesThree};
        case "DELETE_RECIPE":
            return {...state, recipes: action.payload};
            
        default:
            return state;
    }

}