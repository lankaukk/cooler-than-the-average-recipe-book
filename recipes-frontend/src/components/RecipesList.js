import React from 'react'
import {Route, Link} from 'react-router-dom';
import RecipeShow from './RecipeShow'

const RecipesList = (props) =>  {

    return (
        <div>
            <br></br>
            Recipes!
            <br></br>
            {props.recipes.map(recipe => 
                <li key={recipe.id}> 
                    <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link> 
                </li>)}
        </div>
    )

}

export default RecipesList