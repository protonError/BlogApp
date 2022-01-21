import React from 'react'
import {
  NavLink,
} from "react-router-dom";


export default function Header() {
    return (
      
             <nav className='navback navbar navbar-expand-md navbar-dark'>
      <NavLink to="/" className="navbar-brand mb-2">Blog App</NavLink>
      <NavLink to="#" className="navbar-toggler" type="button" data-toggle='collapse' data-target="#reactnavbar">
        <span className="material-icons text-white">menu</span>
      </NavLink>
      <div className="collapse navbar-collapse" id="reactnavbar">
        <ul className="navbar-nav">
          <li className="navitem"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
          <li className="navitem"><NavLink to="createpost" className="nav-link">Create Post</NavLink></li>
       
        </ul>
       
      </div>
    </nav>
      
    )
}
