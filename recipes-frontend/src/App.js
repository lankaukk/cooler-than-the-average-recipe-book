import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from './actions/fetchRecipes';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, {fetchRecipes})(App);
