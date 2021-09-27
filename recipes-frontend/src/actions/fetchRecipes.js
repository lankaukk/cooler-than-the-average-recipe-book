export function fetchRecipes() {
//console.log("inside fetchRecipes")
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes')
            .then(response => response.json())
            .then(recipeData => dispatch({
                type: 'FETCH_RECIPES',
                payload: recipeData
            }))
    }
}

// something like this will actually be used
// fetch('http://localhost:3000/api/v1/`${recipesID}`/7/ingredients')
