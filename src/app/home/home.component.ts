import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { Observable, from } from 'rxjs';
import { Question } from '../models/question.model';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions$ : Observable<Question[]>;
  hotQuestions$ : Observable<Question[]>;
  activeUsers$ : Observable<Profile[]>;
  loggedIn$ : Observable<boolean>;
  newPage: number;
  hotPage: number;
  author: string;
  authorId: number;

  constructor(private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.store$.dispatch(new fromActions.LoadQuestions());
    this.store$.dispatch(new fromActions.LoadHotQuestions());
    this.store$.dispatch(new fromActions.LoadActiveUsers());

    this.questions$ = this.store$.select(fromStore.selectAllQuestions);
    this.hotQuestions$ = this.store$.select(fromStore.selectAllHotQuestions);
    this.activeUsers$ = this.store$.select(fromStore.selectCommunityProfiles);
    this.loggedIn$ = this.store$.select(fromStore.selectProfileLoggedIn);
    
    this.store$.select(fromStore.selectQuestionsPage).subscribe(page => this.newPage = page);
    this.store$.select(fromStore.selectQuestionsPage).subscribe(page => this.hotPage = page);
    this.store$.select(fromStore.selectProfileFirstName).subscribe(name => this.author = name);
    this.store$.select(fromStore.selectProfileId).subscribe(id => this.authorId = id);
  }

  addQuestion(body){
    const question = {
      author : this.author,
      authorId : this.authorId,
      body: body,
      upvotes: 0,
      downvotes: 0,
      answer_count: 0,
      created_at : Math.floor(Date.now() /1000)
    }
    this.store$.dispatch(new fromActions.AddQuestion(question))
  }

  upvoteQuestion({ id, upvotes }){
    this.store$.dispatch(new fromActions.UpvoteQuestion({ id, upvotes}))
  }

  downvoteQuestion({ id, downvotes }){
    this.store$.dispatch(new fromActions.DownvoteQuestion({ id, downvotes }))
  }

  loadMoreQuestions(){
    this.store$.dispatch(new fromActions.LoadMoreQuestions(this.newPage + 1));
  }

  upvoteHotQuestion({ id, upvotes }){
    this.store$.dispatch(new fromActions.UpvoteHotQuestion({ id, upvotes}))
  }

  downvoteHotQuestion({ id, downvotes }){
    this.store$.dispatch(new fromActions.DownvoteHotQuestion({ id, downvotes }))
  }

  loadMoreHotQuestions(){
    this.store$.dispatch(new fromActions.LoadMoreHotQuestions(this.hotPage + 1));
  }

}
