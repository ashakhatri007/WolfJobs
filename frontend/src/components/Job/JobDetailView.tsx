import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useJobStore } from "../../store/JobStore";
import NoJobSelected from "./NoJobSelected";
import JobDetail from "./JobDetails";

const JobDetailView = () => {
  // eslint-disable-line
  /* tslint:disable-next-line */
  const [searchParams] = useSearchParams(); // eslint-disable-line
  const [jobData, setJobData] = useState<Job | null>();

  //   let job: Job | undefined | null = null;
  const jobsList = useJobStore((state) => state.jobList);

  useEffect(() => {
    const jobId = searchParams.get("jobId");
    if (!!jobId) {
      setJobData(jobsList.find((item) => item._id === jobId));
    } else {
      setJobData(null);
    }
  }, [searchParams, jobsList]);

  return (
    <>
      <div className="w-8/12" style={{ height: "calc(100vh - 72px)" }}>
        {!jobData && <NoJobSelected />}
        {!!jobData && <JobDetail jobData={jobData} />}
      </div>
    </>
  );
};

export default JobDetailView;
