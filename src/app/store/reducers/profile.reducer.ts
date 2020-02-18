import * as fromProfile from '../actions/profile.action';

export interface State {
  id: number;
  email: string,
  first_name: string,
  last_name: string,
  answer_count: number;
  loggingIn?: boolean;
  loggedIn?: boolean;
  loginFail?: boolean;
}

export const initialState: State = {
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  answer_count: null,
  loggingIn: false,
  loggedIn: localStorage.getItem('currentUser') ? true : false,
  loginFail: false
};

export function reducer(
  state = initialState,
  action: fromProfile.ProfileAction
): State {
  switch (action.type) {

    case fromProfile.LOGIN: {
        return {
          ...state,
          loggingIn: true,
        };
      }
  
      case fromProfile.LOGIN_SUCCESS: {
        const user = action.payload;
        return {
          ...state,
          ...user,
          loggingIn: false,
          loggedIn: true,
          loginFail: false
        };
      }
  
      case fromProfile.LOGIN_FAIL: {
        console.log('login fail')
        return {
          ...state,
          loggingIn: false,
          loggedIn: false,
          loginFail: true
        };
      }

    case fromProfile.SIGNUP: {
      return {
        ...state,
        loggingIn: true,
      };
    }

    case fromProfile.SIGNUP_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        ...user,
        loggedIn: true,
        loginFail: false
      };
    }

    case fromProfile.SIGNUP_FAIL: {
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        loginFail: true
      };
    }

    case fromProfile.LOGOUT: {
        return {
          ...state,
          loggedIn: false,
        };
    }

    case fromProfile.UPDATE_USER_SUCCESS: {
      
      const changes = action.payload;

      return {
        ...state,
        ...changes
      };
    }

  }

  return state;
}

export const selectProfileState = (state: State) => state;
export const selectProfileId = (state: State) => state.id;
export const selectProfileEmail = (state: State) => state.email;
export const selectProfileFirstName = (state: State) => state.first_name;
export const selectProfileLastName = (state: State) => state.last_name;
export const selectProfileAnswerCount = (state: State) => state.answer_count;
export const selectProfileLoggedIn = (state: State) => state.loggedIn;
export const selectProfileLoginFail = (state: State) => state.loginFail;
