import { Action } from '@ngrx/store';
import { Question } from '../../models/question.model';

export const LOAD_HOT_QUESTIONS = 'LOAD_HOT_QUESTIONS';
export const LOAD_HOT_QUESTIONS_SUCCESS = 'LOAD_HOT_QUESTIONS_SUCCESS';
export const LOAD_HOT_QUESTIONS_FAIL = 'LOAD_HOT_QUESTIONS_FAIL';
export const UPVOTE_HOT_QUESTION = 'UPVOTE_HOT_QUESTION';
export const UPVOTE_HOT_QUESTION_SUCCESS = 'UPVOTE_HOT_QUESTION_SUCCESS';
export const UPVOTE_HOT_QUESTION_FAIL = 'UPVOTE_HOT_QUESTION_FAIL';
export const DOWNVOTE_HOT_QUESTION = 'DOWNVOTE_HOT_QUESTION';
export const DOWNVOTE_HOT_QUESTION_SUCCESS = 'DOWNVOTE_HOT_QUESTION_SUCCESS';
export const DOWNVOTE_HOT_QUESTION_FAIL = 'DOWNVOTE_HOT_QUESTION_FAIL';
export const LOAD_MORE_HOT_QUESTIONS = 'LOAD_MORE_HOT_QUESTIONS';
export const LOAD_MORE_HOT_QUESTIONS_SUCCESS = 'LOAD_MORE_HOT_QUESTIONS_SUCCESS';
export const LOAD_MORE_HOT_QUESTIONS_FAIL = 'LOAD_MORE_HOT_QUESTIONS_FAIL';


export class LoadHotQuestions implements Action {
  readonly type = LOAD_HOT_QUESTIONS;
  constructor() {}
}

export class LoadHotQuestionsSuccess implements Action {
  readonly type = LOAD_HOT_QUESTIONS_SUCCESS;
  constructor(public payload: Question[]) {}
}

export class LoadHotQuestionsFail implements Action {
  readonly type = LOAD_HOT_QUESTIONS_FAIL;
  constructor() {}
}

export class UpvoteHotQuestion implements Action {
  readonly type = UPVOTE_HOT_QUESTION;

  constructor(public payload: any) {}
}

export class UpvoteHotQuestionSuccess implements Action {
  readonly type = UPVOTE_HOT_QUESTION_SUCCESS;

  constructor(public payload: Question) {}
}

export class UpvoteHotQuestionFail implements Action {
  readonly type = UPVOTE_HOT_QUESTION_FAIL;

  constructor() {}
}

export class DownvoteHotQuestion implements Action {
  readonly type = DOWNVOTE_HOT_QUESTION;

  constructor(public payload: any) {}
}

export class DownvoteHotQuestionSuccess implements Action {
  readonly type = DOWNVOTE_HOT_QUESTION_SUCCESS;

  constructor(public payload: Question) {}
}

export class DownvoteHotQuestionFail implements Action {
  readonly type = DOWNVOTE_HOT_QUESTION_FAIL;

  constructor() {}
}

export class LoadMoreHotQuestions implements Action {
  readonly type = LOAD_MORE_HOT_QUESTIONS;
  constructor(public payload: number) {}
}

export class LoadMoreHotQuestionsSuccess implements Action {
  readonly type = LOAD_MORE_HOT_QUESTIONS_SUCCESS;
  constructor(public payload: { page: number, questions: Question[]}) {}
}

export class LoadMoreHotQuestionsFail implements Action {
  readonly type = LOAD_MORE_HOT_QUESTIONS_FAIL;
  constructor() {}
}


export type HotQuestionActions = 
  LoadHotQuestions |
  LoadHotQuestionsSuccess |
  LoadHotQuestionsFail |
  UpvoteHotQuestion |
  UpvoteHotQuestionSuccess |
  UpvoteHotQuestionFail |
  DownvoteHotQuestion |
  DownvoteHotQuestionSuccess |
  DownvoteHotQuestionFail |
  LoadMoreHotQuestions |
  LoadMoreHotQuestionsSuccess |
  LoadMoreHotQuestionsFail;