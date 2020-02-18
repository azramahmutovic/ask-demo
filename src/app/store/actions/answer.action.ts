import { Action } from '@ngrx/store';
import { Answer } from '../../models/answer.model';

export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_ANSWER_SUCCESS = 'ADD_ANSWER_SUCCESS';
export const ADD_ANSWER_FAIL = 'ADD_ANSWER_FAIL';
export const LOAD_ANSWERS = 'LOAD_ANSWERS';
export const LOAD_ANSWERS_SUCCESS = 'LOAD_ANSWERS_SUCCESS';
export const LOAD_ANSWERS_FAIL = 'LOAD_ANSWERS_FAIL';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const UPDATE_ANSWER_SUCCESS = 'UPDATE_ANSWER_SUCCESS';
export const UPDATE_ANSWER_FAIL = 'UPDATE_ANSWER_FAIL';
export const UPVOTE_ANSWER = 'UPVOTE_ANSWER';
export const UPVOTE_ANSWER_SUCCESS = 'UPVOTE_ANSWER_SUCCESS';
export const UPVOTE_ANSWER_FAIL = 'UPVOTE_ANSWER_FAIL';
export const DOWNVOTE_ANSWER = 'DOWNVOTE_ANSWER';
export const DOWNVOTE_ANSWER_SUCCESS = 'DOWNVOTE_ANSWER_SUCCESS';
export const DOWNVOTE_ANSWER_FAIL = 'DOWNVOTE_ANSWER_FAIL';
export const LOAD_USER_ANSWER = 'LOAD_USER_ANSWERS';
export const LOAD_USER_ANSWER_SUCCESS = 'LOAD_USER_ANSWER_SUCCESS';
export const LOAD_USER_ANSWER_FAIL = 'LOAD_USER_ANSWER_FAIL';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const DELETE_ANSWER_SUCCESS = 'DELETE_ANSWER_SUCCESS';
export const DELETE_ANSWER_FAIL = 'DELETE_ANSWER_FAIL';

export class AddAnswer implements Action {
  readonly type = ADD_ANSWER;

  constructor(public payload: Answer) {}
}

export class AddAnswerSuccess implements Action {
  readonly type = ADD_ANSWER_SUCCESS;

  constructor(public payload: Answer) {}
}

export class AddAnswerFail implements Action {
  readonly type = ADD_ANSWER_FAIL;

  constructor() {}
}

export class LoadAnswers implements Action {
  readonly type = LOAD_ANSWERS;
  constructor(public payload : number) {}
}

export class LoadAnswersSuccess implements Action {
  readonly type = LOAD_ANSWERS_SUCCESS;
  constructor(public payload: Answer[]) {}
}

export class LoadAnswersFail implements Action {
  readonly type = LOAD_ANSWERS_FAIL;
  constructor() {}
}

export class UpdateAnswer implements Action {
    readonly type = UPDATE_ANSWER;
  
    constructor(public payload: any) {}
  }
  
  export class UpdateAnswerSuccess implements Action {
    readonly type = UPDATE_ANSWER_SUCCESS;
  
    constructor(public payload: Answer) {}
  }
  
  export class UpdateAnswerFail implements Action {
    readonly type = UPDATE_ANSWER_FAIL;
  
    constructor() {}
  }
  
  export class UpvoteAnswer implements Action {
    readonly type = UPVOTE_ANSWER;
  
    constructor(public payload: any) {}
  }
  
  export class UpvoteAnswerSuccess implements Action {
    readonly type = UPVOTE_ANSWER_SUCCESS;
  
    constructor(public payload: Answer) {}
  }
  
  export class UpvoteAnswerFail implements Action {
    readonly type = UPVOTE_ANSWER_FAIL;
  
    constructor() {}
  }
  
  export class DownvoteAnswer implements Action {
    readonly type = DOWNVOTE_ANSWER;
  
    constructor(public payload: any) {}
  }
  
  export class DownvoteAnswerSuccess implements Action {
    readonly type = DOWNVOTE_ANSWER_SUCCESS;
  
    constructor(public payload: Answer) {}
  }
  
  export class DownvoteAnswerFail implements Action {
    readonly type = DOWNVOTE_ANSWER_FAIL;
  
    constructor() {}
  }

  export class LoadUserAnswer implements Action {
    readonly type = LOAD_USER_ANSWER;
  
    constructor(public payload: any) {}
  }
  
  export class LoadUserAnswerSuccess implements Action {
    readonly type = LOAD_USER_ANSWER_SUCCESS;
  
    constructor(public payload: Answer) {}
  }
  
  export class LoadUserAnswerFail implements Action {
    readonly type = LOAD_USER_ANSWER_FAIL;
  
    constructor() {}
  }

  export class DeleteAnswer implements Action {
    readonly type = DELETE_ANSWER;
  
    constructor(public payload: any) {}
  }
  
  export class DeleteAnswerSuccess implements Action {
    readonly type = DELETE_ANSWER_SUCCESS;
  
    constructor(public payload: number) {}
  }
  
  export class DeleteAnswerFail implements Action {
    readonly type = DELETE_ANSWER_FAIL;
  
    constructor() {}
  }

export type AnswerActions = 
  AddAnswer |
  AddAnswerSuccess |
  AddAnswerFail |
  LoadAnswers |
  LoadAnswersSuccess |
  LoadAnswersFail |
  UpdateAnswer |
  UpdateAnswerSuccess |
  UpdateAnswerFail |
  UpvoteAnswer |
  UpvoteAnswerSuccess |
  UpvoteAnswerFail |
  DownvoteAnswer |
  DownvoteAnswerSuccess |
  DownvoteAnswerFail |
  LoadUserAnswer |
  LoadUserAnswerSuccess |
  LoadUserAnswerFail |
  DeleteAnswer |
  DeleteAnswerSuccess |
  DeleteAnswerFail;