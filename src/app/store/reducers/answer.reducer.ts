// import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

// import { Answer } from '../../models/answer.model';
// import * as answerActions from '../actions/answer.action';

// export interface State extends EntityState<Answer> {}

// export const answerAdapter: EntityAdapter<Answer> = createEntityAdapter<Answer>();

// export const initialState: State = answerAdapter.getInitialState();

// export function reducer(
//   state: State = initialState,
//   action: answerActions.AnswerActions
// ) {
//   switch (action.type) {
//     case answerActions.LOAD_ANSWERS_SUCCESS:
//       return answerAdapter.addAll(action.payload, state);
//     default:
//       return state;
//   }
// }

// const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal,
//   } = answerAdapter.getSelectors();

// export const selectAnswerEntities = selectEntities;
// export const selectAllAnswers = selectAll;
// export const selectAnswersTotal = selectTotal;

import { Answer } from '../../models/answer.model';
import * as fromAnswers from '../actions/answer.action';

export interface State {
  entities: { [id: string]: Answer };
  ids: number[];
}

export const initialState: State = {
  entities: {},
  ids: []
};

export function reducer(
  state = initialState,
  action: fromAnswers.AnswerActions
): State {
  switch (action.type) {
    
    case fromAnswers.LOAD_ANSWERS_SUCCESS: {
      
      const answers = action.payload;
      const ids = answers.map(question => question.id);
      

      const entities = answers.reduce(
        (entities: { [id: string]: Answer }, answer: Answer) => {
          return {
            ...entities,
            [answer.id]: answer,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        ids,
        entities,
      };
    }

    // case fromQuestions.UPDATE_QUESTION_SUCCESS: {
      
    //   const changes = action.payload;
    //   const id = action.payload.id
      
    //   const entities = {
    //     ...state.entities,
    //     [id] : { ...state.entities[id], changes }
    //   }

    //   return {
    //     ...state,
    //     entities,
    //   };
    // }

    case fromAnswers.UPVOTE_ANSWER_SUCCESS: {
      
      const upvotes = action.payload.upvotes;
      const id = action.payload.id
      
      const entities = {
        ...state.entities,
        [id] : { ...state.entities[id], upvotes: upvotes, upvoted: true }
      }

      return {
        ...state,
        entities,
      };
    }

    case fromAnswers.DOWNVOTE_ANSWER_SUCCESS: {
      
      const downvotes = action.payload.downvotes;
      const id = action.payload.id
      
      const entities = {
        ...state.entities,
        [id] : { ...state.entities[id], downvotes: downvotes, downvoted: true }
      }

      return {
        ...state,
        entities,
      };
    }

  }

  return state;
}

export const selectAnswerEntities = (state: State) => state.entities;
export const selectAnswerIds = (state: State) => state.ids;