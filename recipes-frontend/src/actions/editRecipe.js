export const editRecipe = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/recipes/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method:'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(recipeData => dispatch({
            type: 'EDIT_RECIPE',
            payload: recipeData
        }))
    }

}