export const deleteIngredient = (ingredientID, recipeID) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${recipeID}/ingredients/${ingredientID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(recipeData => dispatch({
            type: 'DELETE_INGREDIENT',
            payload: recipeData
        }))
    }

}