export const deleteRecipe = (recipeID) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${recipeID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(recipeData => dispatch({
            type: 'DELETE_RECIPE',
            payload: recipeData
        }))
    }

}