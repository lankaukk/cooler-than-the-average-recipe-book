// class component
import React from 'react';
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe';
import { Redirect } from 'react-router';

class RecipeInput extends React.Component {

    state = {
        name: '',
        description: '',
        redirect: false
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
            description: '',
            redirect: true
        })
        
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/recipes'/>;
        }

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


// using {addRecipe} is an alternative to mapDispatch to props that we can use bc of Thunk
export default connect(null, {addRecipe})(RecipeInput)