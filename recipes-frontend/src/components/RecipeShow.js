// functional component!
import React from 'react';
import { Redirect } from 'react-router';

const RecipeShow = (props) => {

    console.log(props)

    let recipe = props.recipes[props.match.params.id - 1]
    

    return (
        <li>
            {recipe ? null : <Redirect to='/recipes'/>}
            
            <h2>{recipe ? recipe.name : null}</h2>
            <h4>{recipe ? recipe.description : null}</h4>
            {recipe ? recipe.created_at : null}
        </li>
    )
}

export default RecipeShow