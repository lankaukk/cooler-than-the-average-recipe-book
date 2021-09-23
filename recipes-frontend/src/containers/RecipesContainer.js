import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchRecipes } from '../actions/fetchRecipes';
import RecipeInput from '../components/RecipeInput'
import RecipesList from '../components/RecipesList'
import RecipeShow from '../components/RecipeShow';

class RecipesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }

    render(){
        return(
            <div>
                <Route path='/recipes/new' component={RecipeInput}/>
                <Route path='/recipes/:id' render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes} />} />
                <Route exact path='/recipes' render={(routerProps) => <RecipesList {...routerProps} recipes={this.props.recipes} />} />
                
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