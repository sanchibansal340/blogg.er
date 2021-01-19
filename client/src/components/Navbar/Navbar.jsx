import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

const Navbar = ({ auth }) => {
  return (
    <div className="Navbar">
        <nav
          className="bg-white navbar fixed-top navbar-expand-lg navbar-light py-3"
        >
          <a className="navbar-brand" href="/" style={{ fontFamily: 'monospace' }}>
            <i className="material-icons mr-2">code</i>
            Blogg.er
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  activeClassName="selected"
                  className="nav-link navsize"
                  exact
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="selected"
                  className="nav-link navsize"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              {auth.isAuthenticated && (
                <li className="nav-item">
                  <NavLink
                    activeClassName="selected"
                    className="nav-link navsize"
                    to="/blogs/blog/create"
                  >
                    New Blog
                  </NavLink>
                </li>
              )}
            </ul>

            <ul className="navbar-nav user mx-lg-4">
              <li className="nav-item">
                {auth.isAuthenticated ? 
                  <a
                    className="btn btn-danger"
                    href="/dashboard"
                  >
                    Dashboard
                  </a>
                  : <a
                    className="btn btn-danger"
                    href="/login"
                  >
                    Sign In
                  </a>
                }
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

Navbar.propTypes = {
  auth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);