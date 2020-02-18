
import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromQuestions from '../reducers/question.reducer';
  
export const getQuestionsState = createSelector(
    fromFeature.getState,
    (state: fromFeature.State) => state.questions
);
  
export const selectQuestionEntities = createSelector(
    getQuestionsState,
    fromQuestions.selectQuestionEntities
);
  
export const selectQuestionIds = createSelector(
      getQuestionsState,
      fromQuestions.selectQuestionIds
);
  
  //array data structure
export const selectAllQuestions = createSelector(
      selectQuestionEntities, 
      selectQuestionIds,
      (entities, ids) => ids.map(id => entities[id])
);
  
export const selectQuestionById = (id) => createSelector(
      selectQuestionEntities, 
      entities => entities[id]
);
  
export const selectQuestionCount = createSelector(
      getQuestionsState, 
      fromQuestions.selectQuestionCount
);

export const selectQuestionPage = createSelector(
    getQuestionsState, 
    fromQuestions.selectQuestionPage
);