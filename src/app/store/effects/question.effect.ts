import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

import { map, mergeMap, catchError } from 'rxjs/operators';

import * as questionActions from '../actions/question.action';
import { of } from 'rxjs';

@Injectable()
export class QuestionEffects {
    constructor(
        private actions$: Actions, 
        private apiService: ApiService
    ){}

    @Effect()
    loadQuestions$ = this.actions$.pipe(
        ofType<questionActions.LoadQuestions>(questionActions.LOAD_QUESTIONS),
        mergeMap(() => {
        return this.apiService.loadQuestions()
            .pipe(
                map(response => {
                    return new questionActions.LoadQuestionsSuccess( (response as any));
                }),
                catchError(error => of(new questionActions.LoadQuestionsFail())),
            );
        }),
    );

    @Effect()
    loadQuestion$ = this.actions$.pipe(
        ofType<questionActions.LoadQuestion>(questionActions.LOAD_QUESTION),
        mergeMap(action => {
        return this.apiService.loadQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.LoadQuestionSuccess( (response as any));
                }),
                catchError(error => of(new questionActions.LoadQuestionFail())),
            );
        }),
    );

    @Effect()
    loadMoreQuestions$ = this.actions$.pipe(
        ofType<questionActions.LoadMoreQuestions>(questionActions.LOAD_MORE_QUESTIONS),
        mergeMap(action => {
        return this.apiService.loadMoreQuestions(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.LoadMoreQuestionsSuccess({ page: action.payload, questions: response as any });
                }),
                catchError(error => of(new questionActions.LoadMoreQuestionsFail())),
            );
        }),
    );

    @Effect()
    addQuestion$ = this.actions$.pipe(
        ofType<questionActions.AddQuestion>(questionActions.ADD_QUESTION),
        mergeMap(action => {
        return this.apiService.addQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.AddQuestionSuccess();
                }),
                catchError(error => of(new questionActions.AddQuestionFail())),
            );
        }),
    );

    @Effect()
    refreshQuestions$ = this.actions$.pipe(
        ofType(questionActions.ADD_QUESTION_SUCCESS),
        mergeMap(() => {
        return [ new questionActions.LoadQuestions() ]
        }),
    );

    @Effect()
    updateQuestion$ = this.actions$.pipe(
        ofType<questionActions.UpdateQuestion>(questionActions.UPDATE_QUESTION),
        mergeMap(action => {
        return this.apiService.updateQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.UpdateQuestionSuccess(response as any);
                }),
                catchError(error => of(new questionActions.UpdateQuestionFail())),
            );
        }),
    );

    @Effect()
    upvoteQuestion$ = this.actions$.pipe(
        ofType<questionActions.UpdateQuestion>(questionActions.UPVOTE_QUESTION),
        mergeMap(action => {
        return this.apiService.updateQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.UpvoteQuestionSuccess(response as any);
                }),
                catchError(error => of(new questionActions.UpvoteQuestionFail())),
            );
        }),
    );

    @Effect()
    downvoteQuestion$ = this.actions$.pipe(
        ofType<questionActions.DownvoteQuestion>(questionActions.DOWNVOTE_QUESTION),
        mergeMap(action => {
        return this.apiService.updateQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.DownvoteQuestionSuccess(response as any);
                }),
                catchError(error => of(new questionActions.DownvoteQuestionFail())),
            );
        }),
    );

}
