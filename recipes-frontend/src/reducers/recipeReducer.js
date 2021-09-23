// responsible for updating the parts of the store that have to do with recipes
export default function recipeReducer( state = {recipes: []}, action ){
    
    switch (action.type) {
        case "FETCH_RECIPES":
            return {recipes: action.payload};
        case "ADD_RECIPE":
            return {...state, recipes: [...state.recipes, action.payload]};
        default:
            return state;
    }

}