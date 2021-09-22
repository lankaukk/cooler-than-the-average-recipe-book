import React from 'react'
import { connect } from 'react-redux';

import { fetchRecipes } from '../actions/fetchRecipes';
import RecipeInput from '../components/RecipeInput'
import RecipesList from '../components/RecipesList'

class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }

    render(){
        return(
            <div>
                Recipes Container
                <RecipeInput/>
                <RecipesList recipes={this.props.recipes}/>
            </div>
        )    
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesContainer);