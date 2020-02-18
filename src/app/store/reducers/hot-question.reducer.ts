import { Question } from '../../models/question.model';
import * as fromQuestions from '../actions/hot-question.action';

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
  action: fromQuestions.HotQuestionActions
): State {
  switch (action.type) {
    
    case fromQuestions.LOAD_HOT_QUESTIONS_SUCCESS: {
      
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
        ...state,
        page: 1,
        ids,
        entities,
      };
    }

    case fromQuestions.LOAD_MORE_HOT_QUESTIONS_SUCCESS:{
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

    case fromQuestions.UPVOTE_HOT_QUESTION: {
      
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

    case fromQuestions.DOWNVOTE_HOT_QUESTION: {
      
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

export const selectHotQuestionEntities = (state: State) => state.entities;
export const selectHotQuestionIds = (state: State) => state.ids;
export const selectHotQuestionPage = (state: State) => state.page;
