import { create } from "zustand";

type JobState = {
  jobList: Job[];
};

type JobAction = {
  updateJobList: (name: JobState["jobList"]) => void;
};

export const useJobStore = create<JobState & JobAction>()((set) => ({
  jobList: [],

  updateJobList: (jobList: Job[]) => {
    set(() => ({ jobList: jobList }));
  },
}));
