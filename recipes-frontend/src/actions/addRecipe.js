export const addRecipe = (data) => {

    // bc of thunk, we are allowed to pass this dispatch function in our action creator
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method:'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(recipeData => dispatch({
            type: 'ADD_RECIPE',
            payload: recipeData
        }))
    }

}