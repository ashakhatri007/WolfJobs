import client from "./client";

const getJobs = () => client.get("/api/v1/jobs");

export { getJobs };
