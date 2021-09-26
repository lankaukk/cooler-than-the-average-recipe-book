import React from 'react';
import RecipesContainer from './containers/RecipesContainer';
import NavBar from './components/NavBar';
import RecipeInput from './components/RecipeInput';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Recipe Book</h1>
        <NavBar/>
        <RecipesContainer/>
      </div>
    );
  }
}

export default App;
