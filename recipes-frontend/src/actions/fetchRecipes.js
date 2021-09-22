export function fetchRecipes() {

    fetch('http://localhost:3000/api/v1/recipes')
    .then(response => response.json())
    .then(data => console.log(data))

}

// something like this will actually be used
// fetch('http://localhost:3000/api/v1/`${recipesID}`/7/ingredients')
