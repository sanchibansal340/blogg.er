import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh", marginTop: '10em' }} className="Dashboard container">
        <div className="row">
          <div className="col-12 text-center">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="text-muted">
                You have taken one step forward towards your blogging journey with{" "}
                <span style={{ fontFamily: "monospace" }}>Blogg.er</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-danger"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser })(Dashboard);