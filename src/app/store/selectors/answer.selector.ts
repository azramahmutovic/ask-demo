// import {
//     createSelector,
//     createFeatureSelector,
//   } from '@ngrx/store';
//   import * as fromAnswer from '../reducers/answer.reducer';
   
//   export const selectAnswersState = createFeatureSelector<fromAnswer.State>('answers');

//   export const selectAnswerEntities = createSelector(
//     selectAnswersState,
//     fromAnswer.selectAnswerEntities
//   );  
   
//   export const selectAllAnswers = createSelector(
//     selectAnswersState,
//     fromAnswer.selectAllAnswers
//   );

//   export const selectAnswersTotal = createSelector(
//     selectAnswersState,
//     fromAnswer.selectAnswersTotal
//   );

//   export const selectAnswerById = (id) => createSelector(
//     selectAnswerEntities,
//     (entities) => entities[id]
//   );


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

export const selectAnswersTotal = createSelector(
    selectAnswerIds, 
    ids => ids.length
);