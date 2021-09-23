import React from 'react';
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe';

class RecipeInput extends React.Component {

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
        this.props.addRecipe(this.state)
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Add A New Recipe:</h3>
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


// using {addRecipe} is an alternative to mapDispatch to props that we can use bc  of Thunk
export default connect(null, {addRecipe})(RecipeInput)