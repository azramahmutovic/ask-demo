import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

import { map, mergeMap, catchError, filter } from 'rxjs/operators';

import * as answerActions from '../actions/answer.action';
import { of } from 'rxjs';

@Injectable()
export class AnswerEffects {
    constructor(
        private actions$: Actions, 
        private apiService: ApiService
    ){}

    @Effect()
    loadAnswers$ = this.actions$.pipe(
        ofType<answerActions.LoadAnswers>(answerActions.LOAD_ANSWERS),
        mergeMap(action => {
        return this.apiService.loadAnswers(action.payload)
            .pipe(
                map(response => {
                    return new answerActions.LoadAnswersSuccess(response as any);
                }),
                catchError(error => of(new answerActions.LoadAnswersFail())),
            );
        }),
    );

    @Effect()
    addAnswer$ = this.actions$.pipe(
        ofType<answerActions.AddAnswer>(answerActions.ADD_ANSWER),
        mergeMap(action => {
        return this.apiService.addAnswer(action.payload)
            .pipe(
                map(response => {
                    return new answerActions.AddAnswerSuccess(response as any);
                }),
                catchError(error => of(new answerActions.AddAnswerFail())),
            );
        }),
    );

    @Effect()
    refreshAnswersAfterAdd$ = this.actions$.pipe(
        ofType<answerActions.AddAnswerSuccess>(answerActions.ADD_ANSWER_SUCCESS),
        mergeMap(action => {
        return [ new answerActions.LoadAnswers(action.payload.questionId) ]
        }),
    );

    @Effect()
    updateAnswer$ = this.actions$.pipe(
        ofType<answerActions.UpdateAnswer>(answerActions.UPDATE_ANSWER),
        mergeMap(action => {
        return this.apiService.updateAnswer(action.payload)
            .pipe(
                map(response => {
                    return new answerActions.UpdateAnswerSuccess(response as any);
                }),
                catchError(error => of(new answerActions.UpdateAnswerFail())),
            );
        }),
    );

    @Effect()
    refreshAnswersAfterUpdate$ = this.actions$.pipe(
        ofType<answerActions.UpdateAnswerSuccess>(answerActions.UPDATE_ANSWER_SUCCESS),
        mergeMap(action => {
        return [ new answerActions.LoadAnswers(action.payload.questionId) ]
        }),
    );

    @Effect()
    upvoteAnswer$ = this.actions$.pipe(
        ofType<answerActions.UpvoteAnswer>(answerActions.UPVOTE_ANSWER),
        mergeMap(action => {
        return this.apiService.updateAnswer(action.payload)
            .pipe(
                map(response => {
                    return new answerActions.UpvoteAnswerSuccess(response as any);
                }),
                catchError(error => of(new answerActions.UpvoteAnswerFail())),
            );
        }),
    );

    @Effect()
    downvoteAnswer$ = this.actions$.pipe(
        ofType<answerActions.DownvoteAnswer>(answerActions.DOWNVOTE_ANSWER),
        mergeMap(action => {
        return this.apiService.updateAnswer(action.payload)
            .pipe(
                map(response => {
                    return new answerActions.DownvoteAnswerSuccess(response as any);
                }),
                catchError(error => of(new answerActions.DownvoteAnswerFail())),
            );
        }),
    );

    @Effect()
    loadUserAnswer$ = this.actions$.pipe(
        ofType<answerActions.LoadUserAnswer>(answerActions.LOAD_USER_ANSWER),
        mergeMap(action => {
        return this.apiService.loadUserAnswer(action.payload)
            .pipe(
                map(response => {
                    if((response as any).length > 0)
                        return new answerActions.LoadUserAnswerSuccess(response[0] as any);
                    else
                        return new answerActions.LoadUserAnswerFail();
                }),
                catchError(error => of(new answerActions.LoadUserAnswerFail())),
            );
        }),
    );

    @Effect()
    deleteAnswer$ = this.actions$.pipe(
        ofType<answerActions.DeleteAnswer>(answerActions.DELETE_ANSWER),
        mergeMap(action => {
        return this.apiService.deleteAnswer(action.payload)
            .pipe(
                map(response => {
                    return new answerActions.DeleteAnswerSuccess(action.payload);
                }),
                catchError(error => of(new answerActions.DeleteAnswerFail())),
            );
        }),
    );


}
