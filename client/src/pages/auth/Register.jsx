import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import TextField from '@material-ui/core/TextField';
import './Auth.scss';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    console.log(this.state.errors);
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history); 
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container Register" style={{ marginTop: '8rem' }}>
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
                <b>Register</b> below
              </h4>
              <p className="text-muted">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            
            {/* Sign up form */}
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col-md-12 col-lg-8">
                <TextField
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  label="Name"
                  fullWidth
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <span className="text-danger">{errors.name}</span>
              </div>
              <div className="input-field col-md-12 col-lg-8">
                <TextField
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  label="Email"
                  fullWidth
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              <div className="input-field col-md-12 col-lg-8">
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  label="Password"
                  fullWidth
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="text-danger">{errors.password}</span>
              </div>
              <div className="input-field col-md-12 col-lg-8">
                <TextField
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  label="Confirm Password"
                  fullWidth
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <span className="text-danger">{errors.password2}</span>
              </div>
              <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="btn btn-danger"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

Register.defaultProps = {
  errors: '',
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));