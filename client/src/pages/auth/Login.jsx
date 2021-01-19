import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import TextField from '@material-ui/core/TextField';
import './Auth.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/blogs"); // push user to dashboard when they login
    }
    
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.loginUser(userData);
  };
  
  render() {
    const { errors } = this.state;
    return (
      <div className="container Login" style={{ marginTop: '8rem' }}> 
        <div className="row">
          <div className="col-sm-8 offset-s2">
            <Link to="/" className="btn mb-3">
              <i className="material-icons left mr-2">
                keyboard_backspace
              </i> 
              Back to home
            </Link>
            
            <div className="col-sm-12 mb-5" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="text-muted">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            
            {/* Login form */}
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col-sm-12 col-lg-8">
                <TextField
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  label="Email"
                  fullWidth
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <span className="text-danger">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>

              <div className="input-field col-sm-12 col-lg-8">
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  label="Password"
                  fullWidth
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>

              <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-danger"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);