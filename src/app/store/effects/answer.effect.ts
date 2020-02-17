import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

import { map, mergeMap, catchError } from 'rxjs/operators';

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
    refreshAnswers$ = this.actions$.pipe(
        ofType<answerActions.AddAnswerSuccess>(answerActions.ADD_ANSWER_SUCCESS),
        mergeMap(action => {
        return [ new answerActions.LoadAnswers(action.payload.questionId) ]
        }),
    );

    @Effect()
    upvoteAnswer$ = this.actions$.pipe(
        ofType<answerActions.UpdateAnswer>(answerActions.UPVOTE_ANSWER),
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

}
