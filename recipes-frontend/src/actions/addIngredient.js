export const addIngredient = (ingredient, recipeID) => {

    // bc of thunk, we are allowed to pass this dispatch function in our action creator
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${recipeID}/ingredients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredient)
        })
        .then(response => response.json())
        .then(recipeData => dispatch({
            type: 'ADD_INGREDIENT',
            payload: recipeData
        }))
    }

}