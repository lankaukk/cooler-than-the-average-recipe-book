import React from 'react';
import { connect } from 'react-redux'
import { editRecipe } from '../actions/editRecipe';

class RecipeEdit extends React.Component {

    state = {
        name: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let recipe = {...this.state, id: this.props.recipe.id}
        this.props.editRecipe(recipe)
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h4>Edit this Recipe:</h4>
                <form onSubmit={this.handleSubmit}>

                    <label>Recipe Name: </label>
                    <input type="text" name="name" placeholder="Recipe Name" value={this.state.name} onChange={this.handleChange}></input>
                    <br></br>

                    <label>Description: </label>
                    <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}></input>
                    <br></br>

                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {editRecipe})(RecipeEdit)