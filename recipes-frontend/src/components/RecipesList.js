import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/deleteRecipe';


const RecipesList = (props) =>  {

    const handleDelete = (recipe) => {
        props.deleteRecipe(recipe.id)
        
        const li = document.getElementById(`${recipe.id}`)
        li.style.display = 'none'
      }

    return (
        <div>
            <br></br>
            Recipes!
            <br></br>
            {props.recipes.map(recipe => 
                <li key={recipe.id}  id={recipe.id}> 
                    <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link> 
        
                    <button onClick={() => handleDelete(recipe)}>&times;</button>
                </li>
                )}
        </div>
    )

}

export default connect(null, {deleteRecipe})(RecipesList)
