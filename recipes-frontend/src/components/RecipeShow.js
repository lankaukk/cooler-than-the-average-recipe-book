// functional component!
import React from 'react';

const RecipeShow = (props) => {

    return (
        <div>
            <li>
                <h2>{props.recipe.name}</h2>
                <h3>{props.recipe.description}</h3> 
                <p>Posted on {props.recipe.date}</p>
            </li>
        </div>
    )


}

export default RecipeShow