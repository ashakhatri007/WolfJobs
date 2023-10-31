import React, { Component } from "react";
import { connect } from "react-redux";
import { startSingup, signup, clearAuthState } from "../actions/auth";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
      role: "Manager",
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name, role } = this.state;

    if (email && password && confirmPassword && name && role) {
      this.props.dispatch(startSingup());
      this.props.dispatch(signup(email, password, confirmPassword, name, role));
    }
  };

  //   responseGoogle = (response)=>{
  //     console.log(response);
  //     console.log(response.profileObj);

  //     this.props.dispatch(signup(response.profileObj.email,response.profileObj.googleId,response.profileObj.googleId,response.profileObj.givenName))
  //   }

  render() {
    const { inProgress, error, isLoggedIn } = this.props.auth;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form className="login-form">
          <span className="login-signup-header"> Signup</span>
          {error && <div className="alert error-dailog">{error}</div>}
          <div className="field">
            <input
              placeholder="Name"
              type="text"
              required
              onChange={(e) => this.handleInputChange("name", e.target.value)}
            />
          </div>
          <div className="field">
            <input
              placeholder="Email"
              type="email"
              required
              onChange={(e) => this.handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="field">
            <input
              placeholder="Password"
              type="password"
              required
              onChange={(e) =>
                this.handleInputChange("confirmPassword", e.target.value)
              }
            />
          </div>
          <div className="field">
            <input
              placeholder="Confirm password"
              type="password"
              required
              onChange={(e) =>
                this.handleInputChange("password", e.target.value)
              }
            />
          </div>
          <select
            value={this.state.role}
            onChange={(e) => {
              this.handleInputChange("role", e.target.value);
            }}
            style={{
              border: "1px solid rgba(0,0,0,0.12",
              boxSizing: "border-box",
              borderRadius: "6px",
              width: "100%",
              height: "40px",
              marginTop: "20px",
              padding: "5px",
              fontSize: "15px",
            }}
          >
            <option value="Manager">Manager</option>
            <option value="Applicant">Applicant</option>
          </select>
          <div className="field">
            <button onClick={this.onFormSubmit} disabled={inProgress}>
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
