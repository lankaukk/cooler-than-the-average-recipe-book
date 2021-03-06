import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/deleteRecipe';


const RecipesList = (props) =>  {

    const handleDelete = (recipe) => {
        props.deleteRecipe(recipe.id)
        
        // const li = document.getElementById(`${recipe.id}`)
        // li.style.display = 'none'
      }

    return (
        <div>
            <br></br>
            <h2>{props.recipes.length} Recipes!</h2>
            
            {props.recipes.map(recipe => 
                <li key={recipe.id}  id={recipe.id} className="recipe-list-item"> 
                    <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link> 
                    
                    <button onClick={() => handleDelete(recipe)}>&times;</button>
                </li>
                )}
        </div>
    )

}

export default connect(null, {deleteRecipe})(RecipesList)
