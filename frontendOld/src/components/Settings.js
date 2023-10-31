import React, { Component } from "react";
import { connect } from "react-redux";
import {
  clearAuthState,
  editUser,
  generateOtp,
  // setUser,
  verifyOtp,
} from "../actions/auth";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { toast } from "react-toastify";

const Gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" },
];

const AvailableHours = [
  { label: "5 Hours", value: "5 Hours" },
  { label: "10 Hours", value: "10 Hours" },
  { label: "15 Hours", value: "15 Hours" },
  { label: "20 Hours", value: "20 Hours" },
];

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.auth.user.name,
      id: props.auth.user._id,
      password: "",
      confirmPassword: "",
      editMode: false,
      role: "",
      address: "",
      phonenumber: "",
      hours: "",
      dob: new Date(),
      gender: "",
      skills: "",
      showOtpField: false,
      otp: "",
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handleSave = () => {
    const {
      password,
      confirmPassword,
      name,
      address,
      phonenumber,
      hours,
      dob,
      gender,
      skills,
    } = this.state;

    debugger;
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { user } = this.props.auth;

    this.props.dispatch(
      editUser(
        name,
        password,
        confirmPassword,
        user._id,
        user.role,
        address,
        phonenumber,
        hours,
        dob,
        gender,
        skills
      )
    );
  };

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  componentDidMount() {
    console.log("Inside component did mount");
    fetch(
      "http://localhost:8000/api/v1/users/getprofile/" +
        this.props.auth.user._id
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ...result.data.user,
          });
          // this.props.dispatch(setUser(result.data.user));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { user, error } = this.props.auth;
    const { editMode } = this.state;

    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://icons-for-free.com/download-icon-person-1324760545186718018_512.png"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error === false && (
          <div className="alert success-dailog">
            Successfully Updated Profile
          </div>
        )}

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        {!this.props.auth.user.isVerified && !this.state.showOtpField && (
          <div
            className="field"
            style={{
              border: "1px solid #ccc",
              textAlign: "center",
              padding: "5px",
              borderRadius: "5px",
              borderColor: "#F00",
              color: "#F00",
              cursor: "pointer",
            }}
            onClick={() => {
              this.setState({
                showOtpField: true,
              });
              this.props.dispatch(generateOtp(this.props.auth.user._id));
            }}
          >
            Email not verified. Click here to verify
          </div>
        )}
        {this.state.showOtpField && !this.props.auth.user.isVerified && (
          <div
            className="field"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Enter OTP"
              style={{
                textAlign: "center",
                color: "#F00",
                border: "1px solid #FOO",
                borderColor: "#F00",
                marginTop: "0px",
              }}
              onChange={(e) => {
                this.handleChange("otp", e.target.value);
              }}
            />
            <button
              style={{
                marginTop: "0px",
                marginLeft: "10px",
              }}
              onClick={() => {
                this.props.dispatch(
                  verifyOtp(this.props.auth.user._id, this.state.otp)
                );
              }}
            >
              Verify
            </button>
          </div>
        )}

        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange("name", e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange("password", e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              onChange={(e) =>
                this.handleChange("confirmPassword", e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}
        <div className="field">
          <div className="field-label">Address</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange("address", e.target.value)}
              value={this.state.address}
              placeholder="Address"
            />
          ) : (
            <div className="field-value">{this.state.address}</div>
          )}
        </div>
        <div className="field">
          <div className="field-label">Phone Number</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange("phonenumber", e.target.value)}
              value={this.state.phonenumber}
              placeholder="Phone Number"
            />
          ) : (
            <div className="field-value">{this.state.phonenumber}</div>
          )}
        </div>
        <div className="field">
          <div className="field-label">Available Hours</div>
          {editMode ? (
            <Select
              options={AvailableHours}
              onChange={(e) => this.handleChange("hours", e.value)}
            />
          ) : (
            <div className="field-value">{this.state.hours}</div>
          )}
        </div>
        <div className="field">
          <div className="field-label">DOB</div>
          {editMode ? (
            <TextField
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => this.handleChange("dob", e.target.value)}
              value={this.state.dob}
            />
          ) : (
            <div className="field-value">
              {this.state.dob && this.state.dob.toString()}
            </div>
          )}
        </div>
        <div className="field">
          <div className="field-label">Gender</div>
          {editMode ? (
            <Select
              options={Gender}
              onChange={(e) => this.handleChange("gender", e.value)}
            />
          ) : (
            <div className="field-value">{this.state.gender}</div>
          )}
        </div>
        <div className="field">
          <div className="field-label">Skills</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange("skills", e.target.value)}
              value={this.state.skills}
              placeholder="Skills"
            />
          ) : (
            <div className="field-value">{this.state.skills}</div>
          )}
        </div>

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn" onClick={this.handleSave}>
              Save
            </button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange("editMode", true)}
            >
              Edit Profile
            </button>
          )}
        </div>

        {editMode && (
          <div
            className="go-back"
            onClick={() => this.handleChange("editMode", false)}
          >
            Go Back
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Settings);
