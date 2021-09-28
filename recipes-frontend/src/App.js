import React from 'react';
import RecipesContainer from './containers/RecipesContainer';
import NavBar from './components/NavBar';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="logo">Recipe Book</div>
        <NavBar/>
        <RecipesContainer/>
      </div>
    );
  }
}

export default App;
