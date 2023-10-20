import React, { Component } from "react";

import Application from "./Application";
import { connect } from "react-redux";
// import { fetchJobs } from "../actions/job";

class History extends Component {
  render() {
    const { application } = this.props;

    const { user } = this.props.auth;
    console.log("lalallaala");
    console.log("APPPP MANANANAN", application);
    console.log("usssjsjsj", user._id);

    return (
      <div>
        {application.map(
          (app) =>
            app.manageremail === user._id &&
            app.status === "0" && <Application app={app} key={app._id} />
        )}

        {/* <Widgets style={{marginTop:'1000px'}}/> */}
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

export default connect(mapStateToProps)(History);
