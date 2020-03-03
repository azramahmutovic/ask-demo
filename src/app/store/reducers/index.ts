import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import * as fromQuestions from './question.reducer';
import * as fromAnswers from './answer.reducer';
import * as fromProfile from './profile.reducer';
import * as fromHotQuestions from './hot-question.reducer';
import * as fromCommunity from './community.reducer';

export interface State {
  questions: fromQuestions.State,
  answers: fromAnswers.State
  profile: fromProfile.State,
  hot_questions: fromHotQuestions.State,
  community: fromCommunity.State
}

export const reducers: ActionReducerMap<State> = {
  questions: fromQuestions.reducer,
  answers: fromAnswers.reducer,
  profile: fromProfile.reducer,
  hot_questions: fromHotQuestions.reducer,
  community: fromCommunity.reducer
};

export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Reducers');

export function getReducers() {
  return reducers;
}

export const reducerProvider = [
  {provide: reducerToken, useFactory: getReducers}
];

export const getState = (state: State) => state;
