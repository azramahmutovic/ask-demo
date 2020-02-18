import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAnswers from '../reducers/answer.reducer';

export const getAnswersState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.answers
);

export const selectAnswerEntities = createSelector(
  getAnswersState,
  fromAnswers.selectAnswerEntities
);

export const selectAnswerIds = createSelector(
    getAnswersState,
    fromAnswers.selectAnswerIds
);

export const selectAllAnswers = createSelector(
    selectAnswerEntities, 
    selectAnswerIds,
    (entities, ids) => ids.map(id => entities[id])
);

export const selectAnswerById = (id) => createSelector(
    selectAnswerEntities, 
    entities => entities[id]
);

export const selectUserAnswer = createSelector(
  getAnswersState,
  fromAnswers.selectUserAnswer
);

export const selectQuestionAnswered = createSelector(
  getAnswersState,
  fromAnswers.selectQuestionAnswered
);

export const selectAnswerLoading = createSelector(
  getAnswersState,
  fromAnswers.selectAnswerLoading
);