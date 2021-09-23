import React from 'react';
import RecipesContainer from './containers/RecipesContainer';

class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchRecipes()
  // }

  render() {
    return (
      <div className="App">
        <h1>Recipe Book App</h1>
        <RecipesContainer/>
      </div>
    );
  }
}

export default App;
