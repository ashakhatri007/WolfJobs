import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

type FormValues = {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
};

const JobQuestionnaire = () => {
  const location = useLocation();
  const { state } = location;

  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const body = {
      state: {
        details: state,
        questions: {
          question1: data.question1,
          question2: data.question2,
          question3: data.question3,
          question4: data.question4,
        },
      },
    };
    navigate("/job_preview", body);
  };
  return (
    <>
      <div className="flex flex-row">
        <div
          className="w-3/12  pt-10 border-r"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="text-2xl  translate-x-10">Create New Job Listing</div>
          <div className="flex flex-col items-start  ml-10  mt-10 ">
            <div className="inline-flex items-center flex-row  ">
              <AiFillCheckCircle color="#1E1E1E" size="20px" />
              <span className="ml-2 text-xl text-[#1E1E1E]">Add details</span>
            </div>
            <div className="inline-flex items-center flex-row  ">
              <AiFillCheckCircle color="#1E1E1E" size="20px" />
              <span className="ml-2 text-xl text-[#1E1E1E]">
                Fill Questionnaire
              </span>
            </div>
            <div className="inline-flex items-center flex-row  ">
              <AiFillCheckCircle color="#CBCBCB" size="20px" />
              <span className="ml-2 text-xl text-[#CBCBCB]">Preview</span>
            </div>
            <div className="inline-flex items-center flex-row  ">
              <AiFillCheckCircle color="#CBCBCB" size="20px" />
              <span className="ml-2 text-xl text-[#CBCBCB]">Confirm</span>
            </div>
          </div>
        </div>
        <div
          className="w-9/12 pt-10 pl-10"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="text-2xl translate-x-10">Add Details</div>
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="m-4 mx-10"
            >
              <Stack spacing={2} width={600}>
                <TextField
                  label="Question 1"
                  type="text"
                  {...register("question1", {
                    required: "Question is required",
                  })}
                  error={!!errors.question1}
                  helperText={errors.question1?.message}
                  sx={{
                    "& label": { paddingLeft: (theme) => theme.spacing(1) },
                    "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(1.5),
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  label="Question 2"
                  type="text"
                  {...register("question2", {
                    required: "Question is required",
                  })}
                  error={!!errors.question2}
                  helperText={errors.question2?.message}
                  sx={{
                    "& label": { paddingLeft: (theme) => theme.spacing(1) },
                    "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(1.5),
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  label="Question 3"
                  type="text"
                  {...register("question3", {
                    required: "Question is required",
                  })}
                  error={!!errors.question3}
                  helperText={errors.question3?.message}
                  sx={{
                    "& label": { paddingLeft: (theme) => theme.spacing(1) },
                    "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(1.5),
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  label="Question 4"
                  type="text"
                  {...register("question4", {
                    required: "Question is required",
                  })}
                  error={!!errors.question4}
                  helperText={errors.question4?.message}
                  sx={{
                    "& label": { paddingLeft: (theme) => theme.spacing(1) },
                    "& input": { paddingLeft: (theme) => theme.spacing(2.5) },
                    "& fieldset": {
                      paddingLeft: (theme) => theme.spacing(1.5),
                      borderRadius: "10px",
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  style={{
                    color: "#FF5353",
                    borderColor: "#FF5353",
                    textTransform: "none",
                    fontSize: "16px",
                    minWidth: "200px",
                  }}
                >
                  Proceed
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobQuestionnaire;
