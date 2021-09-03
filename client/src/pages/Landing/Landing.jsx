import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Landing.scss';

const Landing = ({ auth }) => {
  return (
    <div style={{ height: "75vh" }} className="container Landing mt-5">
      <div className="row">
        <div className="col-sm-12 text-center">
          <img 
            className="img-fluid" 
            src="https://image.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg"
            alt="Blogg.er home page"
          />
          <div className="home-text">
            <h3>
              <b>Start</b> your journey to writing today.
            </h3>
            <p className="text-muted">
              Create a blog easily and share your story with the world
            </p>
          </div>
          <br />
          {!auth.isAuthenticated && (
            <div className="row">
              <div className="col-sm-6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-lg btn-danger text-white"
                >
                  Register
                </Link>
              </div>
              <div className="col-sm-6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-lg text-danger"
                >
                  Log In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  auth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
