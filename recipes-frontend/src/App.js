import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; 

import RecipesContainer from './containers/RecipesContainer';
import NavBar from './components/NavBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };

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

  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
      <div className="App">
        <div className="logo">Recipe Book</div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
          </Switch>
        </BrowserRouter>

        <NavBar/>
        <RecipesContainer/>
      </div>
    );
  }
}

export default App;
