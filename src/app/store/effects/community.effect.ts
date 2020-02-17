import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

import { map, mergeMap, catchError } from 'rxjs/operators';

import * as communityActions from '../actions/community.action';
import { of } from 'rxjs';

@Injectable()
export class CommunityEffects {
    constructor(
        private actions$: Actions, 
        private apiService: ApiService
    ){}

    @Effect()
    loadActiveUsers$ = this.actions$.pipe(
        ofType<communityActions.LoadActiveUsers>(communityActions.LOAD_ACTIVE_USERS),
        mergeMap(() => {
        return this.apiService.loadMostActiveUsers()
            .pipe(
                map(response => {
                    return new communityActions.LoadActiveUsersSuccess( (response as any));
                }),
                catchError(error => of(new communityActions.LoadActiveUsersFail())),
            );
        }),
    );

}
