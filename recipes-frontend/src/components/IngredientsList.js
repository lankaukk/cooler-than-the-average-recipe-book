import React from 'react'

const IngredientsList = (props) => {

    return (
        <div>
            Ingredients:
            <br></br>
            {props.ingredients.map(ingredient => 
                <li key={ingredient.id}> 
                    {ingredient.name}
                </li>)}
            <br></br>
        </div>
    )

}

export default IngredientsList