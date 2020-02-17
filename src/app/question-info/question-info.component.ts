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
  id: string;
  question$ : Observable<Question>;
  answers$ : Observable<Answer[]>;
  questionAnswersCount : number;
  author: string;
  authorId: number;
  authorAnswersCount : number;

  constructor(private route: ActivatedRoute, private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store$.dispatch(new fromActions.LoadQuestion(this.id));
    this.store$.dispatch(new fromActions.LoadAnswers(this.id));
    this.question$ = this.store$.select(fromStore.selectQuestionById(this.id));
    this.answers$ = this.store$.select(fromStore.selectAllAnswers);
    this.store$.select(fromStore.selectAnswersTotal).subscribe(count => this.questionAnswersCount = count);
    this.store$.select(fromStore.selectProfileFirstName).subscribe(name => this.author = name);
    this.store$.select(fromStore.selectProfileId).subscribe(id => this.authorId = id);
    this.store$.select(fromStore.selectProfileAnswerCount).subscribe(count => this.authorAnswersCount = count);
  }

  addAnswer(body){
    const answer = {
      author : this.author,
      authorId : this.authorId,
      body: body,
      upvotes: 0,
      downvotes: 0,
      created_at : Math.floor(Date.now() /1000),
      questionId: (this.id as any)
    }
    console.log('answer ', answer)
    
    this.store$.dispatch(new fromActions.AddAnswer(answer))
    this.store$.dispatch(new fromActions.UpdateQuestion({ id: answer.questionId, answer_count: this.questionAnswersCount + 1 }))
    this.store$.dispatch(new fromActions.UpdateUser({ id: this.authorId, answer_count: this.authorAnswersCount + 1 }))
  }

  upvoteAnswer({ id, upvotes }){
    this.store$.dispatch(new fromActions.UpvoteAnswer({ id, upvotes}))
  }

  downvoteAnswer({ id, downvotes }){
    this.store$.dispatch(new fromActions.DownvoteAnswer({ id, downvotes }))
  }

}
