import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { createApplication, closeJob } from "../actions/job";

class Job extends Component {
  handleApply = () => {
    const { user } = this.props.auth;
    const { job } = this.props;

    if (!user.isVerified) {
      toast.error("Please verify your email before applying");
      return;
    }

    this.props.dispatch(
      createApplication(
        user.name,
        user.address,
        user.phonenumber,
        user._id,
        user.hours,
        user.dob,
        user.gender,
        user.skills,
        user.email,
        job.managerid,
        job.name,
        job._id
      )
    );
  };

  handleApply1 = () => {
    const { user } = this.props.auth;
    const { job } = this.props;

    this.props.dispatch(closeJob(user._id, job._id));
  };

  render() {
    const { job } = this.props;
    const { user } = this.props.auth;
    console.log("lalallaalaxxxx");
    const { isLoggedIn } = this.props.auth;
    return (
      <div className="post" key={job._id}>
        <div className="post-header">
          <div>
            <h4 style={{ display: "inline-block" }}>Job Name : </h4>
            <span style={{ marginLeft: "10px" }}>{job.name}</span>
          </div>

          <div>
            <h4
              style={{
                display: "inline-block",
                marginTop: "-12px",
              }}
            >
              Status :{" "}
            </h4>
            {job.status === "0" && (
              <span style={{ marginLeft: "10px" }}>Open</span>
            )}
            {job.status === "1" && (
              <span style={{ marginLeft: "10px" }}>Closed</span>
            )}
          </div>

          <div>
            <h4
              style={{
                display: "inline-block",
                marginTop: "-12px",
              }}
            >
              Location :{" "}
            </h4>
            <span style={{ marginLeft: "10px" }}>{job.location}</span>
          </div>

          <div>
            <h4
              style={{
                display: "inline-block",
                marginTop: "-12px",
              }}
            >
              Description :{" "}
            </h4>
            <span style={{ marginLeft: "10px" }}>{job.description}</span>
          </div>

          <div>
            <h4
              style={{
                display: "inline-block",
                marginTop: "-12px",
              }}
            >
              Pay :{" "}
            </h4>
            <span style={{ marginLeft: "10px" }}>{job.pay}</span>
          </div>

          <div>
            <h4
              style={{
                display: "inline-block",
                marginTop: "-12px",
              }}
            >
              Schedule :{" "}
            </h4>
            <span style={{ marginLeft: "10px" }}>{job.schedule}</span>
          </div>

          {isLoggedIn && user.role === "Applicant" && (
            <div className="field">
              <button
                className="button save-btn"
                onClick={this.handleApply}
                style={{ width: "50%" }}
              >
                Apply
              </button>
            </div>
          )}
          {isLoggedIn &&
            user.role === "Manager" &&
            user._id === job.managerid && (
              <div className="field">
                <button
                  className="button save-btn"
                  onClick={this.handleApply1}
                  style={{ width: "50%" }}
                >
                  Close this job
                </button>
              </div>
            )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, job, application }) {
  return {
    auth,
    application,
    //   job
  };
}

export default connect(mapStateToProps)(Job);
