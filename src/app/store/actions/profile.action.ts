import { Action } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import { Question } from '../../models/question.model';
import { Notif } from '../../models/notif.model';

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
export const SEND_NOTIFICATION = 'SEND_NOTIFICATION';
export const SEND_NOTIFICATION_SUCCESS = 'SEND_NOTIFICATION_SUCCESS';
export const SEND_NOTIFICATION_FAIL = 'SEND_NOTIFICATION_FAIL';
export const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION';
export const OPEN_NOTIFICATION_SUCCESS = 'OPEN_NOTIFICATION_SUCCESS';
export const OPEN_NOTIFICATION_FAIL = 'OPEN_NOTIFICATION_FAIL';
export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS';
export const LOAD_NOTIFICATIONS_SUCCESS = 'LOAD_NOTIFICATIONS_SUCCESS';
export const LOAD_NOTIFICATIONS_FAIL = 'LOAD_NOTIFICATIONS_FAIL';

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
  
export class SendNotification implements Action {
    readonly type = SEND_NOTIFICATION;
    constructor(public payload : Notif) {}
}

export class SendNotificationSuccess implements Action {
    readonly type = SEND_NOTIFICATION_SUCCESS;
    constructor() {}
}

export class SendNotificationFail implements Action {
    readonly type = SEND_NOTIFICATION_FAIL;
    constructor() {}
}

export class LoadNotifications implements Action {
    readonly type = LOAD_NOTIFICATIONS;
    constructor(public payload: number) {}
}
  
export class LoadNotificationsSuccess implements Action {
    readonly type = LOAD_NOTIFICATIONS_SUCCESS;
    constructor(public payload: Notif[]) {}
}
  
export class LoadNotificationsFail implements Action {
    readonly type = LOAD_NOTIFICATIONS_FAIL;
    constructor() {}
}

export class OpenNotification implements Action {
    readonly type = OPEN_NOTIFICATION;
    constructor(public payload : number) {}
}
export class OpenNotificationSuccess implements Action {
    readonly type = OPEN_NOTIFICATION_SUCCESS;
    constructor(public payload : number) {}
}

export class OpenNotificationFail implements Action {
    readonly type = OPEN_NOTIFICATION_FAIL;
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
    | LoadMyQuestionsFail
    | SendNotification
    | SendNotificationSuccess
    | SendNotificationFail
    | LoadNotifications
    | LoadNotificationsSuccess
    | LoadNotificationsFail
    | OpenNotification
    | OpenNotificationSuccess
    | OpenNotificationFail;