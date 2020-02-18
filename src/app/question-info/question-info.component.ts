import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { timeDifference } from '../utils/time-diff';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.scss']
})
export class QuestionInfoComponent implements OnInit {

  timeDifference = timeDifference;
  questionId: number;
  question$ : Observable<Question>;
  answers$ : Observable<Answer[]>;
  loggedIn$ : Observable<boolean>;
  questionAnswered$: Observable<boolean>;
  userAnswer$: Observable<Answer>;
  questionAnswersCount : number;
  author: string;
  authorId: number;
  authorAnswersCount : number;

  constructor(private route: ActivatedRoute, private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.questionId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.store$.dispatch(new fromActions.LoadQuestion(this.questionId));
    this.store$.dispatch(new fromActions.LoadAnswers(this.questionId));
    
    this.question$ = this.store$.select(fromStore.selectQuestionById(this.questionId));
    this.answers$ = this.store$.select(fromStore.selectAllAnswers);
    this.loggedIn$ = this.store$.select(fromStore.selectProfileLoggedIn);

    this.userAnswer$ = this.store$.select(fromStore.selectUserAnswer);
    this.questionAnswered$ = this.store$.select(fromStore.selectQuestionAnswered);

    this.store$.select(fromStore.selectAnswersTotal).subscribe(count => this.questionAnswersCount = count);
    this.store$.select(fromStore.selectProfileFirstName).subscribe(name => this.author = name);
    this.store$.select(fromStore.selectProfileAnswerCount).subscribe(count => this.authorAnswersCount = count);
    this.store$.select(fromStore.selectProfileId).subscribe(id => {
      this.authorId = id;
      if(this.authorId)
        this.store$.dispatch(new fromActions.LoadUserAnswer({ userId: this.authorId, questionId: this.questionId })); 
    });
  }

  addAnswer(body){
    const answer = {
      author : this.author,
      authorId : this.authorId,
      body: body,
      upvotes: 0,
      downvotes: 0,
      created_at : Math.floor(Date.now() /1000),
      questionId: (this.questionId as any)
    }
    
    this.store$.dispatch(new fromActions.AddAnswer(answer))
    this.store$.dispatch(new fromActions.UpdateQuestion({ id: answer.questionId, answer_count: this.questionAnswersCount + 1 }))
    this.store$.dispatch(new fromActions.UpdateUser({ id: this.authorId, answer_count: this.authorAnswersCount + 1 }))
  }

  editAnswer(body){
    this.store$.dispatch(new fromActions.UpdateAnswer(body))
  }

  upvoteAnswer({ id, upvotes }){
    this.store$.dispatch(new fromActions.UpvoteAnswer({ id, upvotes}))
  }

  downvoteAnswer({ id, downvotes }){
    this.store$.dispatch(new fromActions.DownvoteAnswer({ id, downvotes }))
  }

  deleteAnswer(id){
    this.store$.dispatch(new fromActions.DeleteAnswer(id))
    this.store$.dispatch(new fromActions.UpdateQuestion({ id: this.questionId, answer_count: this.questionAnswersCount - 1 }))
    this.store$.dispatch(new fromActions.UpdateUser({ id: this.authorId, answer_count: this.authorAnswersCount - 1 }))
  }

}
