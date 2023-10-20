import { APIURLS } from "../helpers/urls";
import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESSFULL,
  EDIT_USER_FAILED,
  GENERATE_OTP_SUCCESS,
  GENERATE_OTP_FAILED,
  SET_USER,
} from "./actionTypes";
import { getFormBody } from "../helpers/utils";
// import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { toast } from "react-toastify";
// import { fetchUserFriends } from '../actions/friends';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIURLS.login();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);

        if (data.success) {
          //dispatch action to save user
          localStorage.setItem("token", data.data.token);
          dispatch(loginSuccess(data.data.user));
          //   dispatch(fetchUserFriends(data.data.user._id));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function signup(email, password, confirmPassword, name, role) {
  return (dispatch) => {
    const url = APIURLS.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
        role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        if (data.success) {
          // do something
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}

export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

export function editUserSucessfull(user) {
  return {
    type: EDIT_USER_SUCCESSFULL,
    user,
  };
}

export function editUserFailed(error) {
  return {
    type: EDIT_USER_FAILED,
    error,
  };
}

export function generateOtpSuccess() {
  return {
    type: GENERATE_OTP_SUCCESS,
  };
}

export function generateOtpFailed(error) {
  return {
    type: GENERATE_OTP_FAILED,
    error,
  };
}

export function userEmailVerified() {
  return {
    type: "USER_EMAIL_VERIFIED",
  };
}

export function generateOtp(userId) {
  return (dispatch) => {
    const url = APIURLS.generateOtp(userId);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // dispatch(generateOtpSuccess());
          toast.success("OTP Sent Successfully");
          return;
        }
        // dispatch(generateOtpFailed(data.message));
        // toast.error(data.message);
        toast.success(data.message);
      })
      .catch((error) => {
        // dispatch(generateOtpFailed(error));
        toast.error("Could not generate OTP");
      });
  };
}

export function verifyOtp(userId, otp) {
  return (dispatch) => {
    const url = APIURLS.verifyOtp(userId);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ userId, otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(userEmailVerified());
          toast.success("OTP Verified Successfully");
          return;
        }
        // dispatch(verifu(data.message));
        toast.error(data.message);
      })
      .catch((error) => {
        // dispatch(generateOtpFailed(error));
        toast.error("Could not verify OTP");
      });
  };
}

export function editUser(
  name,
  password,
  confirmPassword,
  userId,
  role,
  address,
  phonenumber,
  hours,
  dob,
  gender,
  skills
) {
  return (dispatch) => {
    const url = APIURLS.editProfile();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        //'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
      },
      body: getFormBody({
        name,
        password,
        confirm_password: confirmPassword,
        id: userId,
        role,
        address,
        phonenumber,
        hours,
        dob,
        gender,
        skills,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("EDIT PROFILE data", data);
        if (data.success) {
          dispatch(editUserSucessfull(data.data.user));

          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          toast.success("Profile Updated Successfully");
          return;
        }

        dispatch(editUserFailed(data.message));
      })
      .catch((error) => {
        toast.error("Could not edit profile");
      });
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function refreshUserData(userId) {
  return (dispatch) => {
    fetch("http://localhost:8000/api/v1/users/getprofile/" + userId)
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(setUser(result.data.user));
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
}
