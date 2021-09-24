import React from 'react'
import IngredientInput from '../components/IngredientInput'
import IngredientsList from '../components/IngredientsList'

class IngredientsContainer extends React.Component {

    render() {
        return (
            <div>
                <IngredientsList ingredients={this.props.recipe && this.props.recipe.ingredients}/>
                <IngredientInput recipe={this.props.recipe}/>
            </div>
        )
    }
}

export default IngredientsContainer