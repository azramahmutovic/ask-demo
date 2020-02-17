
import { Action } from '@ngrx/store';
import { Profile } from 'src/app/models/profile.model';

export const LOAD_ACTIVE_USERS= 'LOAD_ACTIVE_USERS';
export const LOAD_ACTIVE_USERS_SUCCESS = 'LOAD_ACTIVE_USERS_SUCCESS';
export const LOAD_ACTIVE_USERS_FAIL = 'LOAD_ACTIVE_USERS_FAIL';

export class LoadActiveUsers implements Action {
    readonly type = LOAD_ACTIVE_USERS;
    constructor() {}
  }
  
export class LoadActiveUsersSuccess implements Action {
    readonly type = LOAD_ACTIVE_USERS_SUCCESS;
    constructor(public payload: Profile[]) {}
}
  
export class LoadActiveUsersFail implements Action {
    readonly type = LOAD_ACTIVE_USERS_FAIL;
    constructor() {}
}

  export type CommunityActions = 
  LoadActiveUsers |
  LoadActiveUsersSuccess |
  LoadActiveUsersFail;