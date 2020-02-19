import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { timeDifference } from '../utils/time-diff';
import { Profile } from '../models/profile.model';

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
  answersLoading$ : Observable<boolean>;
  loggedIn$ : Observable<boolean>;
  questionAnswered$: Observable<boolean>;
  userAnswer$: Observable<Answer>;
  questionAnswersCount : number;
  questionAuthorId: number;
  profile: Profile;
  

  constructor(private route: ActivatedRoute, private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.questionId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.store$.dispatch(new fromActions.LoadQuestion(this.questionId));
    this.store$.dispatch(new fromActions.LoadAnswers(this.questionId));
    
    this.question$ = this.store$.select(fromStore.selectQuestionById(this.questionId));
    this.answers$ = this.store$.select(fromStore.selectAllAnswers);
    this.answersLoading$ = this.store$.select(fromStore.selectAnswerLoading);
    this.loggedIn$ = this.store$.select(fromStore.selectProfileLoggedIn);

    this.store$.select(fromStore.selectQuestionById(this.questionId)).subscribe(question => { 
      this.questionAnswersCount = question.answer_count 
      this.questionAuthorId = question.authorId;
    })

    this.userAnswer$ = this.store$.select(fromStore.selectUserAnswer);
    this.questionAnswered$ = this.store$.select(fromStore.selectQuestionAnswered);

    this.store$.select(fromStore.selectProfileInfo).subscribe(profile => this.profile = profile);
    this.store$.select(fromStore.selectProfileId).subscribe(id => {
      if(id)
        this.store$.dispatch(new fromActions.LoadUserAnswer({ userId: id, questionId: this.questionId })); 
    });
  }

  addAnswer(body){
    const answer = {
      author : this.profile.first_name,
      authorId : this.profile.id,
      body: body,
      upvotes: 0,
      downvotes: 0,
      created_at : Math.floor(Date.now() /1000),
      questionId: (this.questionId as any)
    }
    
    const notification = {
      userId : this.questionAuthorId,
      questionId: this.questionId,
      answer_author: this.profile.first_name,
      created_at : Math.floor(Date.now() /1000),
      opened: false
    }

    this.store$.dispatch(new fromActions.AddAnswer(answer))
    this.store$.dispatch(new fromActions.UpdateQuestion({ id: answer.questionId, answer_count: this.questionAnswersCount + 1 }))
    this.store$.dispatch(new fromActions.UpdateUser({ id: this.profile.id, answer_count: this.profile.answer_count + 1 }))
    this.store$.dispatch(new fromActions.SendNotification(notification))
    
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
    this.store$.dispatch(new fromActions.UpdateUser({ id: this.profile.id, answer_count: this.profile.answer_count - 1 }))
  }

}
