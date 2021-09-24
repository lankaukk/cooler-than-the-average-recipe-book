import React from 'react';
import { connect } from 'react-redux'
import { addIngredient } from '../actions/addIngredient';

class IngredientInput extends React.Component {

    state = {
        name: '',
        group: 'none'
    }

    // this is needed bc we have a controlled form
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addIngredient(this.state, this.props.recipe.id)
        this.setState({
            name: '',
            group: 'none'
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                <label>Add Ingredient: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Ingredient Name" ></input>
                
                <select name="group" value={this.state.group} onChange={this.handleChange}>   
                    <option value="none" disabled >
                        Category
                    </option>        
                    <option value="dairy">dairy</option>
                    <option value="fruits">fruits</option>
                    <option value="vegetables">vegetables</option>
                    <option value="grains">grains</option>
                    <option value="protein">protein</option>
                    <option value="fats">fats</option>
                    <option value="seasoning">seasoning</option>
                    <option value="condiments">condiments</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" value="Add" ></input>

                </form>
                
            </div>
        )
    }
}

export default connect(null, {addIngredient})(IngredientInput)