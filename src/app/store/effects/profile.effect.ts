import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

import { map, mergeMap, catchError, filter } from 'rxjs/operators';

import * as profileActions from '../actions/profile.action';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProfileEffects {
    constructor(
        private actions$: Actions, 
        private apiService: ApiService,
        private router: Router,
    ){}


    @Effect()
    signup$ = this.actions$.pipe(
        ofType<profileActions.Signup>(profileActions.SIGNUP),
        mergeMap(action => {
        return this.apiService.postUser(action.payload)
            .pipe(
                map(response => {
                    localStorage.setItem('currentUser', JSON.stringify(response[0]));
                    this.router.navigate(['/']);
                    return new profileActions.SignupSuccess(response[0] as any);
                }),
                catchError(error => of(new profileActions.SignupFail())),
            );
        }),
    );

    @Effect({ dispatch: false })
	logout$ = this.actions$.pipe(
        ofType<profileActions.LogOut>(profileActions.LOGOUT),
        map(() => {
            localStorage.removeItem('currentUser');
            this.router.navigate(['login']);
        })
    )
    
    @Effect()
    login$ = this.actions$.pipe(
        ofType<profileActions.Login>(profileActions.LOGIN),
        mergeMap(action => {
        return this.apiService.loginUser(action.payload)
            .pipe(
                map(response => {
                    if((response as any).length === 1){
                        localStorage.setItem('currentUser', JSON.stringify(response[0]));
                        this.router.navigate(['/']);
                        return new profileActions.LoginSuccess(response[0] as any);
                    }
                    else{
                        return new profileActions.LoginFail();
                    }
                    
                }),
                catchError(error => of(new profileActions.LoginFail())),
            );
        }),
    );

    @Effect()
    updateUser$ = this.actions$.pipe(
        ofType<profileActions.UpdateUser>(profileActions.UPDATE_USER),
        mergeMap(action => {
        return this.apiService.updateUser(action.payload)
            .pipe(
                map(response => {
                    return new profileActions.UpdateUserSuccess(response as any);
                }),
                catchError(error => of(new profileActions.UpdateUserFail())),
            );
        }),
    );

    @Effect()
    loadMyQuestions$ = this.actions$.pipe(
        ofType<profileActions.LoadMyQuestions>(profileActions.LOAD_MY_QUESTIONS),
        mergeMap(action => {
        return this.apiService.loadMyQuestions(action.payload)
            .pipe(
                map(response => {
                    return new profileActions.LoadMyQuestionsSuccess( (response as any));
                }),
                catchError(error => of(new profileActions.LoadMyQuestionsFail())),
            );
        }),
    );


}
