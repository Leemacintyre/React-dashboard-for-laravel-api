import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { User } from '../models/user';

const Nav = (props: { user: User }) => {

  const { user } = props

  const logout = async () => {
    await axios.post('logout', {});
  }

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
      <ul>
        <li className="p-2 my-md-0 mr-md-3">
          <Link to={'/profile'} className="p-2 text-white text-decoration-none">{user.name}</Link>
          <Link to={'/login'} className="p-2 text-white text-decoration-none"
                onClick={logout}
          >Sign out</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Nav);
