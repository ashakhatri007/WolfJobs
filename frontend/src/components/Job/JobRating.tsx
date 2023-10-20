import { useEffect, useState } from "react";
import { useApplicationStore } from "../../store/ApplicationStore";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const JobRating = (props: any) => {
  const { jobData }: { jobData: Job } = props;
  const [displayList, setDisplayList] = useState<Application[]>([]);
  const [searchParams] = useSearchParams();

  const applicationList = useApplicationStore((state) => state.applicationList);

  useEffect(() => {
    setDisplayList(
      applicationList.filter(
        (item) => item.jobid === jobData._id && item.status === "rating"
      )
    );
  }, [searchParams]);

  const handleAccept = (applicantid: string) => {
    const url = "http://localhost:8000/api/v1/users/modifyApplication";

    const body = {
      applicationId: applicantid,
      status: "accepted",
    };

    axios.post(url, body).then((res) => {
      if (res.status == 200) {
        toast.success("Accepted candidate");
        location.reload();
        return;
      }
      toast.error("Failed to accept candidate");
    });
  };
  const handleReject = (applicantid: string) => {
    const url = "http://localhost:8000/api/v1/users/modifyApplication";

    const body = {
      applicationId: applicantid,
      status: "rejected",
    };

    axios.post(url, body).then((res) => {
      if (res.status == 200) {
        toast.success("Rejected candidate");
        location.reload();
        return;
      }
      toast.error("Failed to reject candidate");
    });
  };

  return (
    <>
      <div className="text-xl">Rating</div>
      {displayList.length === 0 && (
        <div className="text-base text-gray-500">List empty</div>
      )}
      {displayList.map((item: Application) => {
        return (
          <div className=" p-1">
            <div className="bg-white my-2 mx-1 p-2 rounded-lg">
              <div className=" flex flex-row justify-between">
                <div className="flex flex-col">
                  <div>
                    <span className="font-bold"> Name: </span>
                    {item.applicantname}
                  </div>
                  {!!item?.phonenumber && <div>Phone: {item.phonenumber} </div>}
                  <div>
                    <span className="font-bold">Email: </span>
                    {item.applicantemail}
                  </div>
                  {!!item?.applicantSkills && (
                    <div>
                      <span className="font-bold">Skills:</span>
                      {item.applicantSkills}
                    </div>
                  )}
                  <div>
                    <span className="font-bold">Rating: </span>
                    {item.rating || "0"}
                  </div>
                </div>
                <div className="flex flex-row">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      return handleAccept(item._id);
                    }}
                    style={{ color: "#FF5353" }}
                  >
                    Accept
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      return handleReject(item._id);
                    }}
                    style={{ color: "#FF5353" }}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobRating;
