// import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

// import { Question } from '../../models/question.model';
// import * as questionActions from '../actions/question.action';

// export interface State extends EntityState<Question> {
//   upvoted : { [id: string]: boolean };
//   downvoted : { [id: string]: boolean };
// }

// export const questionAdapter: EntityAdapter<Question> = createEntityAdapter<Question>();

// export const initialState: State = questionAdapter.getInitialState({
//   upvoted: {},
//   downvoted: {}
// });

// export function reducer(
//   state: State = initialState,
//   action: questionActions.QuestionActions
// ) {
//   switch (action.type) {
//     case questionActions.LOAD_QUESTIONS_SUCCESS:
//       return questionAdapter.addAll(action.payload, state);
//     case questionActions.UPDATE_QUESTION_SUCCESS:
//       return questionAdapter.upsertOne(action.payload, state);
//     default:
//       return state;
//   }
// }

// const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal,
//   } = questionAdapter.getSelectors();

// export const selectQuestionEntities = selectEntities;
// export const selectAllQuestions = selectAll;
// export const selectQuestionsTotal = selectTotal;

import { Question } from '../../models/question.model';
import * as fromQuestions from '../actions/question.action';

export interface State {
  entities: { [id: string]: Question };
  ids: number[];
  page: number
}

export const initialState: State = {
  entities: {},
  ids: [],
  page: 1
};

export function reducer(
  state = initialState,
  action: fromQuestions.QuestionActions
): State {
  switch (action.type) {
    
    case fromQuestions.LOAD_QUESTIONS_SUCCESS: {
      
      const questions = action.payload;
      const ids = questions.map(question => question.id);
      
      const entities = questions.reduce(
        (entities: { [id: string]: Question }, question: Question) => {
          return {
            ...entities,
            [question.id]: question,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        page: 1,
        ids,
        entities,
      };
    }

    case fromQuestions.LOAD_QUESTION_SUCCESS: {
      
      const question = action.payload;
      const entities = {
        ...state.entities,
        [question.id] : question
      }

      return {
        ...state,
        entities
      };
    }

    case fromQuestions.LOAD_MORE_QUESTIONS_SUCCESS:{
      const page = action.payload.page;
      const questions = action.payload.questions;
      const ids = [...state.ids, ...questions.map(question => question.id)];

      const entities = questions.reduce(
        (entities: { [id: string]: Question }, question: Question) => {
          return {
            ...entities,
            [question.id]: question,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        page: page,
        ids,
        entities,
      };
    }

    case fromQuestions.UPDATE_QUESTION_SUCCESS: {
      
      const changes = action.payload;
      const id = action.payload.id
      
      const entities = {
        ...state.entities,
        [id] : { ...state.entities[id], changes }
      }

      return {
        ...state,
        entities,
      };
    }

    case fromQuestions.UPVOTE_QUESTION_SUCCESS: {
      
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

    case fromQuestions.DOWNVOTE_QUESTION_SUCCESS: {
      
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

export const selectQuestionEntities = (state: State) => state.entities;
export const selectQuestionIds = (state: State) => state.ids;
export const selectQuestionPage = (state: State) => state.page;
