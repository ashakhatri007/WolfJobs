import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_FAILED,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    AUTHENTICATE_USER,
    LOG_OUT,
    CLEAR_AUTH_STATE,
    EDIT_USER_FAILED,
    EDIT_USER_SUCCESSFULL,
    GENERATE_OTP_SUCCESS,
    GENERATE_OTP_FAILED,
    USER_EMAIL_VERIFIED,
    SET_USER,
} from '../actions/actionTypes'

const initialAuthState = {
    user: {},
    error: null,
    isLoggedIn: false,
    inProgress: false,
}

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                error: null,
            }

        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                inProgress: true,
            }

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoggedIn: true,
                inProgress: false,
                error: null,
            }

        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return {
                ...state,
                error: action.error,
                inProgress: false,
            }
        case AUTHENTICATE_USER:
            return {
                ...state,
                user: action.user,
                isLoggedIn: true,
            }
        case LOG_OUT:
            return {
                ...state,
                user: {},
                isLoggedIn: false,
            }

        case EDIT_USER_SUCCESSFULL:
            return {
                ...state,
                user: action.user,
                error: false,
            }

        case EDIT_USER_FAILED:
            return {
                ...state,
                error: action.error,
            }

        case GENERATE_OTP_SUCCESS:
            return {
                ...state,
            }
        case GENERATE_OTP_FAILED:
            return {
                ...state,
                error: action.error,
            }
        case USER_EMAIL_VERIFIED:
            return {
                ...state,
                user: {
                    ...state.user,
                    isVerified: true,
                },
            }
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}
