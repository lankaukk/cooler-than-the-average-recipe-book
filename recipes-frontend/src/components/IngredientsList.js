import React from 'react'
import { connect } from 'react-redux'
import { deleteIngredient } from '../actions/deleteIngredient'

const IngredientsList = (props) => {

    
    const handleDelete = (ingredient) => {
        props.deleteIngredient(ingredient.id, ingredient.recipe_id)
      }

    return (
        <div>
            Ingredients:
            <br></br>
            {props.ingredients.map(ingredient => 
                <li className={ingredient.group} key={ingredient.id} > 
                    {ingredient.name  } 

                    <button onClick={() => handleDelete(ingredient)}>&times;</button>
                </li>)}
            <br></br>
        </div>
    )

}

export default connect(null, {deleteIngredient})(IngredientsList)