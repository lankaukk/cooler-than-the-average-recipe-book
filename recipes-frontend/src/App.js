import React from 'react';
import RecipesContainer from './containers/RecipesContainer';
import NavBar from './containers/NavBar';


class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchRecipes()
  // }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Recipe Book</h1>
        <RecipesContainer/>
      </div>
    );
  }
}

export default App;
