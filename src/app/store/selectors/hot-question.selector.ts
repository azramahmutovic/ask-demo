import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromQuestions from '../reducers/hot-question.reducer';

export const getHotQuestionsState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.hot_questions
);

export const selectHotQuestionEntities = createSelector(
  getHotQuestionsState,
  fromQuestions.selectHotQuestionEntities
);

export const selectHotQuestionIds = createSelector(
    getHotQuestionsState,
    fromQuestions.selectHotQuestionIds
);

//array data structure
export const selectAllHotQuestions = createSelector(
    selectHotQuestionEntities, 
    selectHotQuestionIds,
    (entities, ids) => ids.map(id => entities[id])
);

export const selectHotQuestionById = (id) => createSelector(
    selectHotQuestionEntities, 
    entities => entities[id]
);

export const selectHotQuestionCount = createSelector(
    selectHotQuestionIds, 
    ids => ids.length
);

export const selectHotQuestionPage = createSelector(
    getHotQuestionsState, 
  fromQuestions.selectHotQuestionPage
);