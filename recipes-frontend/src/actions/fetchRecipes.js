export function fetchRecipes() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/recipes')
            .then(response => response.json())
            .then(recipeData => dispatch({
                type: 'FETCH_RECIPES',
                payload: recipeData
            }))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
}
