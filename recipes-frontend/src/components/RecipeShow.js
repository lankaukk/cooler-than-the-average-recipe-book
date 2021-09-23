// functional component!
import React from 'react';

const RecipeShow = (props) => {

    // const formattedDate = 
    // <p>{new Intl.DateTimeFormat("en-US", {
    //     year: "numeric",
    //     month: "long",
    //     day: "2-digit"
    //   }).format(props.recipe.created_at)}</p>

    const recipe = props.recipes[props.match.params.id - 1]

    return (
        <div>
            <li>
                <h2>{recipe ? recipe.name : null}</h2>
                <h4>{recipe ? recipe.description : null}</h4>
                {recipe ? recipe.created_at : null}

            </li>
        </div>
    )


}

export default RecipeShow