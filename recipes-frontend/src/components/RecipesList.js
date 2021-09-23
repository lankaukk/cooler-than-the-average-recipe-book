import React from 'react'
import RecipeShow from './RecipeShow'

const RecipesList = (props) =>  {

    return (
        <div>
            <br></br>
            Recipes!
            <ul>
            {props.recipes.map(recipe => 
                <div key={recipe.id}> 
                    <RecipeShow recipe={recipe}/>
                </div>
                )}
            </ul>
        </div>
    )

}

export default RecipesList