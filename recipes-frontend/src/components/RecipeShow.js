// functional component!
import React from 'react';
import { Redirect } from 'react-router';
import RecipeEdit from './RecipeEdit';
import Likes from './Likes';

import IngredientsContainer from '../containers/IngredientsContainer';

const RecipeShow = (props) => {

    //console.log(props)
    //let recipe = props.recipes[props.match.params.id - 1]
    // + is same as parseInt, turns it into an integer
    let recipe = props.recipes.filter(recipe => recipe.id === +props.match.params.id)[0]
    
    return (
        <div>
            {recipe ? null : <Redirect to='/recipes'/>}
            <div className="recipe-card">
                <h2>{recipe ? recipe.name : null}</h2>
                <h4>{recipe ? recipe.description : null}</h4>
                <h4>Added on {recipe ? recipe.formatted : null}</h4>

                <Likes/>
            </div>
            <br></br>
            <IngredientsContainer recipe={recipe}/>
            <RecipeEdit recipe={recipe}/>
        </div>
    )
}

export default RecipeShow
