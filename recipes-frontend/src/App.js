import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; 

import RecipesContainer from './containers/RecipesContainer';
import NavBar from './components/NavBar';
import RecipesList from './components/RecipesList';
import RecipeInput from './components/RecipeInput';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };

  componentDidMount() {
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    }

  loginStatus = () => {
      axios.get('http://localhost:3001/logged_in', 
     {withCredentials: true})    
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  render() {
    return (
      <div className="App">
        <div className="logo">Recipe Book</div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/><br></br>
            <Route exact path='/signup' component={Signup}/><br></br>
            <Route exact path='/recipes' component={RecipesList}/><br></br>
            <Route exact path='/recipes/new' component={RecipeInput}/><br></br>
          </Switch>
        </BrowserRouter>

        {/* <NavBar/> */}
        <RecipesContainer/>
      </div>
    );
  }
}

export default App;
