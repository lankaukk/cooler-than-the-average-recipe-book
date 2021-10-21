import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
      <div>
        <Link to='/recipes'>All Recipes  </Link>
        <Link to='/recipes/new'> Add recipe</Link>
        <Link to='/login'> Log in </Link>
      </div>
  
    )
  }

export default NavBar;