import React from 'react';
import {connect} from 'react-redux'

class IngredientInput extends React.Component {

    render(){
        return (
            <div>
                <form>
                
                <label>Add Ingredient: </label>
                <input type="text" placeholder="Ingredient Name" ></input>
                
                {/* <input type="text"  ></input> */}
                <select placeholder="Group" >   
                    <option value="none" selected disabled hidden>
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

export default connect(null)(IngredientInput)