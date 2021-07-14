import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
  console.log(props.history)
  /*
  setTimeout( () => { 
    props.history.push('/') }, 2000); 
    */
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo center">Poke' Times</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Navbar)