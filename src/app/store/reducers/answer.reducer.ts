import { Answer } from '../../models/answer.model';
import * as fromAnswers from '../actions/answer.action';

export interface State {
  entities: { [id: string]: Answer };
  ids: number[];
  selectedAnswer: Answer;
  questionAnswered: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  ids: [],
  selectedAnswer: null,
  questionAnswered: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromAnswers.AnswerActions
): State {
  switch (action.type) {

    case fromAnswers.LOAD_ANSWERS : {
      return {
        ...state,
        ids : [],
        entities : {},
        loading: true
      };
    }
    
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
        loading: false
      };
    }

    case fromAnswers.LOAD_ANSWERS_FAIL: {
      
      return {
        ...state,
        loading: false
      };
    }

    case fromAnswers.ADD_ANSWER_SUCCESS: {
      
      return {
        ...state,
        selectedAnswer: action.payload,
        questionAnswered: true
      };

    }

    case fromAnswers.UPDATE_ANSWER_SUCCESS: {
      
      const changes  = action.payload;
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

    case fromAnswers.LOAD_USER_ANSWER_SUCCESS: {
      
      const answer = action.payload;
      
      return {
        ...state,
        selectedAnswer: answer,
        questionAnswered: true
      };

    }

    case fromAnswers.LOAD_USER_ANSWER_FAIL: {
      
      return {
        ...state,
        selectedAnswer: null,
        questionAnswered: false
      };

    }

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

    case fromAnswers.DELETE_ANSWER_SUCCESS: {
      
      var id = action.payload;
      var newIds;
      [id, ...newIds] = state.ids;
      
      return {
        ...state,
        ids: newIds,
        questionAnswered: false
      };
    }

  }

  return state;
}

export const selectAnswerEntities = (state: State) => state.entities;
export const selectAnswerIds = (state: State) => state.ids;
export const selectUserAnswer = (state: State) => state.selectedAnswer;
export const selectQuestionAnswered = (state: State) => state.questionAnswered;
export const selectAnswerLoading = (state: State) => state.loading;