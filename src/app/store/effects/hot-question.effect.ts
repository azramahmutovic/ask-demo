import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

import { map, mergeMap, catchError } from 'rxjs/operators';

import * as questionActions from '../actions/hot-question.action';
import { of } from 'rxjs';

@Injectable()
export class HotQuestionEffects {
    constructor(
        private actions$: Actions, 
        private apiService: ApiService
    ){}

    @Effect()
    loadHotQuestions$ = this.actions$.pipe(
        ofType<questionActions.LoadHotQuestions>(questionActions.LOAD_HOT_QUESTIONS),
        mergeMap(() => {
        return this.apiService.loadHotQuestions()
            .pipe(
                map(response => {
                    return new questionActions.LoadHotQuestionsSuccess( (response as any));
                }),
                catchError(error => of(new questionActions.LoadHotQuestionsFail())),
            );
        }),
    );

    @Effect()
    loadMoreHotQuestions$ = this.actions$.pipe(
        ofType<questionActions.LoadMoreHotQuestions>(questionActions.LOAD_MORE_HOT_QUESTIONS),
        mergeMap(action => {
        return this.apiService.loadMoreHotQuestions(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.LoadMoreHotQuestionsSuccess({ page: action.payload, questions: response as any });
                }),
                catchError(error => of(new questionActions.LoadMoreHotQuestionsFail())),
            );
        }),
    );

    @Effect()
    upvoteHotQuestion$ = this.actions$.pipe(
        ofType<questionActions.UpvoteHotQuestion>(questionActions.UPVOTE_HOT_QUESTION),
        mergeMap(action => {
        return this.apiService.updateQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.UpvoteHotQuestion(response as any);
                }),
                catchError(error => of(new questionActions.UpvoteHotQuestionFail())),
            );
        }),
    );

    @Effect()
    downvoteQuestion$ = this.actions$.pipe(
        ofType<questionActions.DownvoteHotQuestion>(questionActions.DOWNVOTE_HOT_QUESTION),
        mergeMap(action => {
        return this.apiService.updateQuestion(action.payload)
            .pipe(
                map(response => {
                    return new questionActions.DownvoteHotQuestion(response as any);
                }),
                catchError(error => of(new questionActions.DownvoteHotQuestionFail())),
            );
        }),
    );

}
