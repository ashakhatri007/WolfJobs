import React, { Component } from "react";

import Job from "./Job";

import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { job, search } = this.props;
    console.log("SEAARCH", search);

    console.log("lalallaala");
    console.log("jobbbbbs", job);
    return (
      <div>
        {search.results.length > 0
          ? search.results.map((job) => <Job job={job} key={job._id} />)
          : job.map(
              (job) => job.status === "0" && <Job job={job} key={job._id} />
            )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    jobs: state.jobs,
    search: state.search,
  };
}

export default connect(mapStateToProps)(Home);
