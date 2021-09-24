import React from 'react';

class IngredientInput extends React.Component {

    render(){
        return (
            <div>
                <form>
                
                <label>Add Ingredient: </label>
                    <input type="text" placeholder="Ingredient Name" ></input>
                </form>
                
            </div>
        )
    }
}

export default IngredientInput