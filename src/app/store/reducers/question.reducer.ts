import { Question } from '../../models/question.model';
import * as fromQuestions from '../actions/question.action';

export interface State {
  entities: { [id: string]: Question };
  ids: number[];
  page: number,
  count: number
}

export const initialState: State = {
  entities: {},
  ids: [],
  page: 1,
  count: null
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
        ...state,
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
        ...state,
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
        [id] : { ...state.entities[id], ...changes }
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

    case fromQuestions.GET_QUESTION_COUNT_SUCCESS: {
      
      const count = action.payload;

      return {
        ...state,
        count
      };
    }

  }

  return state;
}

export const selectQuestionEntities = (state: State) => state.entities;
export const selectQuestionIds = (state: State) => state.ids;
export const selectQuestionPage = (state: State) => state.page;
export const selectQuestionCount = (state: State) => state.count;