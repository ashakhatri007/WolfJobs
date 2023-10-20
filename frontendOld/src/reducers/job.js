import { UPDATE_JOB, ADD_JOB, CLOSE_JOB } from "../actions/actionTypes";

export default function jobs(state = [], action) {
  // { posts : [] }

  switch (action.type) {
    case UPDATE_JOB:
      return action.jobs;

    case ADD_JOB:
      return [action.job, ...state];

    case CLOSE_JOB:
      const updatedJob = state.map((job) => {
        if (job._id === action.jobId) {
          return {
            ...job,
            status: action.status,
          };
        }

        return job;
      });

      return updatedJob;

    default:
      return state;
  }
}
