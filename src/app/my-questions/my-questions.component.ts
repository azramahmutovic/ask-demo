import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss']
})
export class MyQuestionsComponent implements OnInit {

  questions$ : Observable<Question[]>;
  questionCount$ : Observable<number>;
  questionsPage$ : Observable<number>;
  
  constructor(private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.store$.select(fromStore.selectProfileId).subscribe(userId => {
      if(!!userId)
        this.store$.dispatch(new fromActions.LoadMyQuestions(userId));
    })
    
    this.questions$ = this.store$.select(fromStore.selectMyQuestions);
    this.questionCount$ = this.store$.select(fromStore.selectMyQuestionCount)
    this.questionsPage$ = this.store$.select(fromStore.selectMyQuestionPage)
  }

  loadMoreQuestions(){
    
  }

  upvoteQuestion({ id, upvotes }){
    this.store$.dispatch(new fromActions.UpvoteQuestion({ id, upvotes}))
  }

  downvoteQuestion({ id, downvotes }){
    this.store$.dispatch(new fromActions.DownvoteQuestion({ id, downvotes }))
  }

}
