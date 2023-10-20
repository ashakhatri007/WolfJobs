import React, { Component } from "react";

import Application from "./Application";
import { connect } from "react-redux";
// import { toast } from "react-toastify";

class UserApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInProgress: true,
      showAccepted: false,
      showRejected: false,
    };
  }

  render() {
    const { application } = this.props;

    // const { user } = this.props.auth;
    console.log("lalallaala");

    return (
      <div>
        <div class="filter-menu">
          <div className="filter-item">
            <label
              style={{
                marginBottom: "5px",
                userSelect: "none",
                cursor: "pointer",
              }}
              htmlFor="inProgress"
            >
              Show applications in progress
            </label>
            <input
              id="inProgress"
              type="checkbox"
              checked={this.state.showInProgress}
              onChange={() => {
                this.setState({ showInProgress: !this.state.showInProgress });
              }}
            />
          </div>
          <div className="filter-item">
            <label
              style={{
                marginBottom: "5px",
                userSelect: "none",
                cursor: "pointer",
              }}
              htmlFor="accepted"
            >
              Show accepted applications
            </label>
            <input
              type="checkbox"
              id="accepted"
              checked={this.state.showAccepted}
              onChange={() => {
                this.setState({ showAccepted: !this.state.showAccepted });
              }}
            />
          </div>
          <div className="filter-item">
            <label
              style={{
                marginBottom: "5px",
                userSelect: "none",
                cursor: "pointer",
              }}
              htmlFor="rejected"
            >
              Show rejected applications
            </label>
            <input
              type="checkbox"
              id="rejected"
              checked={this.state.showRejected}
              onChange={() => {
                this.setState({ showRejected: !this.state.showRejected });
              }}
            />
          </div>
        </div>
        {application.map((app) => {
          if (app.status === "0" && this.state.showInProgress) {
            return <Application app={app} key={app._id} />;
          } else if (app.status === "1" && this.state.showAccepted) {
            return <Application app={app} key={app._id} />;
          } else if (app.status === "2" && this.state.showRejected) {
            return <Application app={app} key={app._id} />;
          }
          return null;
        })}
      </div>
    );
  }
}

function mapStateToProps({ auth, job, application }) {
  return {
    auth,
    job,
    application,
  };
}

export default connect(mapStateToProps)(UserApplication);
