import React from "react";
import { Link, json, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const cheakinout = localStorage.getItem('user');
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div className="nav">
      <div className="title">Database Backend Application</div>
      {
        cheakinout ?
          <ul className="nav-list navlist-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link onClick={logout} to='/'>Logout({JSON.parse(localStorage.getItem('user')).USERNAME})</Link></li>
          </ul>
          :
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
      }
    </div>
  )
}
export default Nav;