import { Profile } from '../../models/profile.model';
import * as fromCommunity from '../actions/community.action';

export interface State {
  entities: { [id: string]: Profile };
  ids: number[];
}

export const initialState: State = {
  entities: {},
  ids: [],
};

export function reducer(
  state = initialState,
  action: fromCommunity.CommunityActions
): State {
  switch (action.type) {
    
    case fromCommunity.LOAD_ACTIVE_USERS_SUCCESS: {
      
      const users = action.payload;
      const ids = users.map(question => question.id);
      
      const entities = users.reduce(
        (entities: { [id: string]: Profile }, user: Profile) => {
          return {
            ...entities,
            [user.id]: user,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ids,
        entities,
      };
    }

  }

  return state;
}

export const selectCommunityEntities = (state: State) => state.entities;
export const selectCommunityIds = (state: State) => state.ids;
