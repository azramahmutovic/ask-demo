import { Action } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import { Question } from 'src/app/models/question.model';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
export const LOAD_MY_QUESTIONS = 'LOAD_MY_QUESTIONS';
export const LOAD_MY_QUESTIONS_SUCCESS = 'LOAD_MY_QUESTIONS_SUCCESS';
export const LOAD_MY_QUESTIONS_FAIL = 'LOAD_MY_QUESTIONS_FAIL';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: { email: string, password: string }) {}
}
  
export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: Profile) {}
}
  
export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
    constructor() {}
}

export class Signup implements Action {
    readonly type = SIGNUP;
    constructor(public payload: Profile) {}
}
  
export class SignupSuccess implements Action {
    readonly type = SIGNUP_SUCCESS;
    constructor(public payload: Profile) {}
}
  
export class SignupFail implements Action {
    readonly type = SIGNUP_FAIL;
    constructor() {}
}

export class LogOut implements Action {
    readonly type = LOGOUT;
    constructor() {}
}

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
  
    constructor(public payload: any) {}
}
  
export class UpdateUserSuccess implements Action {
    readonly type = UPDATE_USER_SUCCESS;
  
    constructor(public payload: Profile) {}
}
  
export class UpdateUserFail implements Action {
    readonly type = UPDATE_USER_FAIL;
  
    constructor() {}
}

export class LoadMyQuestions implements Action {
    readonly type = LOAD_MY_QUESTIONS;
    constructor(public payload: number) {}
  }
  
  export class LoadMyQuestionsSuccess implements Action {
    readonly type = LOAD_MY_QUESTIONS_SUCCESS;
    constructor(public payload: Question[]) {}
  }
  
  export class LoadMyQuestionsFail implements Action {
    readonly type = LOAD_MY_QUESTIONS_FAIL;
    constructor() {}
  }
  


export type ProfileAction = 
    | Login
    | LoginSuccess
    | LoginFail
    | Signup
    | SignupSuccess
    | SignupFail
    | LogOut
    | UpdateUser
    | UpdateUserSuccess
    | UpdateUserFail
    | LoadMyQuestions 
    | LoadMyQuestionsSuccess 
    | LoadMyQuestionsFail;