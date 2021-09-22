import React from 'react'

const RecipesList = (props) =>  {

    return (
        <div>
            <br></br>
            Recipes!
            <ul>
            {props.recipes.map(recipe => 
                <li key={recipe.id}> 
                    <h2>{recipe.name}</h2>
                    <h3>{recipe.description}</h3> 
                    <p>Posted on {recipe.date}</p>
                </li>
                )}
            </ul>
        </div>
    )

}

export default RecipesList