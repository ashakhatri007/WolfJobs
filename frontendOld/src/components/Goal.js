import React, { Component } from "react";
import { connect } from "react-redux";

import { searchUsers } from "../actions/search";
// import {clearAuthState} from '../actions/auth';
import { clearsearchstate } from "../actions/search";

import "react-datepicker/dist/react-datepicker.css";

import Widgets from "./Widgets.js";
import { createJob } from "../actions/job";
import { setIsLoading } from "../actions/utilState";
// import classnames from "classnames";
import { BeatLoader } from "react-spinners";

class Goal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      skills: "",
      managerid: "",
      status: "0",
      location: "",
      description: "",
      pay: "",
      schedule: "",
      editMode: false,
    };
  }

  handleSearch = (e) => {
    const searchText = e.target.value;
    console.log(searchText);

    this.props.dispatch(searchUsers(searchText));
  };

  clearSearch = () => {
    this.props.dispatch(clearsearchstate([]));
    console.log("UNMOUNT");
  };

  handleInputChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handleSave = () => {
    this.props.dispatch(setIsLoading(true));
    const { name, skills, status, location, description, pay, schedule } =
      this.state;
    const { user } = this.props.auth;
    this.props.dispatch(
      createJob(
        name,
        skills,
        user._id,
        status,
        location,
        description,
        pay,
        schedule
      )
    );
  };

  render() {
    const { error } = this.props.auth;

    return (
      <div>
        <div
          className="goal-form"
          style={{ width: "600px", height: "500px", marginLeft: "100px" }}
        >
          <span className="login-signup-header">Add Job</span>
          {error && <div className="alert error-dailog">{error}</div>}

          {/* <form className="login-form"> */}

          <div className="field">
            <input
              placeholder="Job Name"
              type="text"
              required
              onChange={(e) => this.handleInputChange("name", e.target.value)}
            />
          </div>

          <div className="field">
            <input
              placeholder="Skills"
              type="text"
              required
              onChange={(e) => this.handleInputChange("skills", e.target.value)}
            />
          </div>

          <div className="field">
            <input
              placeholder="Location"
              type="text"
              required
              onChange={(e) =>
                this.handleInputChange("location", e.target.value)
              }
            />
          </div>
          <div className="field">
            <input
              placeholder="Description"
              type="text"
              required
              onChange={(e) =>
                this.handleInputChange("description", e.target.value)
              }
            />
          </div>

          <div className="field">
            <input
              placeholder="Pay"
              type="text"
              required
              onChange={(e) => this.handleInputChange("pay", e.target.value)}
            />
          </div>

          <div className="field">
            <input
              placeholder="Schedule"
              type="text"
              required
              onChange={(e) =>
                this.handleInputChange("schedule", e.target.value)
              }
            />
          </div>

          <div className="field">
            <button className="button save-btn" onClick={this.handleSave}>
              {this.props.isLoading ? (
                <BeatLoader size={10} color={"#fff"} />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>

        <Widgets style={{ marginTop: "1000px" }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    results: state.search.results,
    isLoading: state.utilState.isLoading,
  };
}

export default connect(mapStateToProps)(Goal);
