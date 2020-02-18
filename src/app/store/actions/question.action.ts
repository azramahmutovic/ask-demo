import { Action } from '@ngrx/store';
import { Question } from '../../models/question.model';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS';
export const ADD_QUESTION_FAIL = 'ADD_QUESTION_FAIL';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAIL = 'LOAD_QUESTIONS_FAIL';
export const LOAD_QUESTION = 'LOAD_QUESTION';
export const LOAD_QUESTION_SUCCESS = 'LOAD_QUESTION_SUCCESS';
export const LOAD_QUESTION_FAIL = 'LOAD_QUESTION_FAIL';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS';
export const UPDATE_QUESTION_FAIL = 'UPDATE_QUESTION_FAIL';
export const UPVOTE_QUESTION = 'UPVOTE_QUESTION';
export const UPVOTE_QUESTION_SUCCESS = 'UPVOTE_QUESTION_SUCCESS';
export const UPVOTE_QUESTION_FAIL = 'UPVOTE_QUESTION_FAIL';
export const DOWNVOTE_QUESTION = 'DOWNVOTE_QUESTION';
export const DOWNVOTE_QUESTION_SUCCESS = 'DOWNVOTE_QUESTION_SUCCESS';
export const DOWNVOTE_QUESTION_FAIL = 'DOWNVOTE_QUESTION_FAIL';
export const LOAD_MORE_QUESTIONS = 'LOAD_MORE_QUESTIONS';
export const LOAD_MORE_QUESTIONS_SUCCESS = 'LOAD_MORE_QUESTIONS_SUCCESS';
export const LOAD_MORE_QUESTIONS_FAIL = 'LOAD_MORE_QUESTIONS_FAIL';
export const GET_QUESTION_COUNT = 'GET_QUESTION_COUNT';
export const GET_QUESTION_COUNT_SUCCESS = 'GET_QUESTION_COUNT_SUCCESS';
export const GET_QUESTION_COUNT_FAIL = 'GET_QUESTION_COUNT_FAIL';
export const UPDATE_QUESTION_COUNT = 'UPDATE_QUESTION_COUNT';
export const UPDATE_QUESTION_COUNT_SUCCESS = 'UPDATE_QUESTION_COUNT_SUCCESS';
export const UPDATE_QUESTION_COUNT_FAIL = 'UPDATE_QUESTION_COUNT_FAIL';
export class AddQuestion implements Action {
  readonly type = ADD_QUESTION;

  constructor(public payload: Question ) {}
}

export class AddQuestionSuccess implements Action {
  readonly type = ADD_QUESTION_SUCCESS;

  constructor() {}
}

export class AddQuestionFail implements Action {
  readonly type = ADD_QUESTION_FAIL;

  constructor() {}
}

export class LoadQuestions implements Action {
  readonly type = LOAD_QUESTIONS;
  constructor() {}
}

export class LoadQuestionsSuccess implements Action {
  readonly type = LOAD_QUESTIONS_SUCCESS;
  constructor(public payload: Question[]) {}
}

export class LoadQuestionsFail implements Action {
  readonly type = LOAD_QUESTIONS_FAIL;
  constructor() {}
}

export class LoadQuestion implements Action {
  readonly type = LOAD_QUESTION;
  constructor(public payload: number) {}
}

export class LoadQuestionSuccess implements Action {
  readonly type = LOAD_QUESTION_SUCCESS;
  constructor(public payload: Question) {}
}

export class LoadQuestionFail implements Action {
  readonly type = LOAD_QUESTION_FAIL;
  constructor() {}
}

export class UpdateQuestion implements Action {
  readonly type = UPDATE_QUESTION;

  constructor(public payload: any) {}
}

export class UpdateQuestionSuccess implements Action {
  readonly type = UPDATE_QUESTION_SUCCESS;

  constructor(public payload: Question) {}
}

export class UpdateQuestionFail implements Action {
  readonly type = UPDATE_QUESTION_FAIL;

  constructor() {}
}

export class UpvoteQuestion implements Action {
  readonly type = UPVOTE_QUESTION;

  constructor(public payload: any) {}
}

export class UpvoteQuestionSuccess implements Action {
  readonly type = UPVOTE_QUESTION_SUCCESS;

  constructor(public payload: Question) {}
}

export class UpvoteQuestionFail implements Action {
  readonly type = UPVOTE_QUESTION_FAIL;

  constructor() {}
}

export class DownvoteQuestion implements Action {
  readonly type = DOWNVOTE_QUESTION;

  constructor(public payload: any) {}
}

export class DownvoteQuestionSuccess implements Action {
  readonly type = DOWNVOTE_QUESTION_SUCCESS;

  constructor(public payload: Question) {}
}

export class DownvoteQuestionFail implements Action {
  readonly type = DOWNVOTE_QUESTION_FAIL;

  constructor() {}
}

export class LoadMoreQuestions implements Action {
  readonly type = LOAD_MORE_QUESTIONS;
  constructor(public payload: number) {}
}

export class LoadMoreQuestionsSuccess implements Action {
  readonly type = LOAD_MORE_QUESTIONS_SUCCESS;
  constructor(public payload: { page: number, questions: Question[]}) {}
}

export class LoadMoreQuestionsFail implements Action {
  readonly type = LOAD_MORE_QUESTIONS_FAIL;
  constructor() {}
}

export class GetQuestionCount implements Action {
  readonly type = GET_QUESTION_COUNT;
  constructor() {}
}

export class GetQuestionCountSuccess implements Action {
  readonly type = GET_QUESTION_COUNT_SUCCESS;
  constructor(public payload: number) {}
}

export class GetQuestionCountFail implements Action {
  readonly type = GET_QUESTION_COUNT_FAIL;
  constructor() {}
}

export class UpdateQuestionCount implements Action {
  readonly type = UPDATE_QUESTION_COUNT;
  constructor(public payload: number) {}
}

export class UpdateQuestionCountSuccess implements Action {
  readonly type = UPDATE_QUESTION_COUNT_SUCCESS;
  constructor(public payload: number) {}
}

export class UpdateQuestionCountFail implements Action {
  readonly type = UPDATE_QUESTION_COUNT_FAIL;
  constructor() {}
}


export type QuestionActions = 
  AddQuestion |
  AddQuestionSuccess |
  AddQuestionFail |
  LoadQuestions |
  LoadQuestionsSuccess |
  LoadQuestionsFail |
  LoadQuestion |
  LoadQuestionSuccess |
  LoadQuestionFail |
  UpdateQuestion |
  UpdateQuestionSuccess |
  UpdateQuestionFail |
  UpvoteQuestion |
  UpvoteQuestionSuccess |
  UpvoteQuestionFail |
  DownvoteQuestion |
  DownvoteQuestionSuccess |
  DownvoteQuestionFail |
  LoadMoreQuestions |
  LoadMoreQuestionsSuccess |
  LoadQuestionsFail |
  GetQuestionCount |
  GetQuestionCountSuccess |
  GetQuestionCountFail |
  UpdateQuestionCount|
  UpdateQuestionCountSuccess |
  UpdateQuestionCountFail;