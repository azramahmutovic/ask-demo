import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const API = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  loadQuestion(id){
    return this.http
      .get(API + `/questions/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadQuestions(){
    return this.http
      .get(API + `/questions?_sort=created_at&_order=desc&_page=1&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadMoreQuestions(page){
    return this.http
      .get(API + `/questions?_sort=created_at&_order=desc&_page=${page}&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadHotQuestions(){
    return this.http
      .get(API + `/questions?_sort=upvotes&_order=desc&_page=1&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadMoreHotQuestions(page){
    return this.http
      .get(API + `/questions?_sort=upvotes&_order=desc&_page=${page}&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  addQuestion(question) {
    return this.http
      .post(API + '/questions', question)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  updateQuestion(question) {
    return this.http
      .patch(API + `/questions/${question.id}`, question)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadAnswers(questionId){
    return this.http
      .get(API + `/questions/${questionId}/answers?_sort=created_at&_order=desc`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  addAnswer(answer) {
    return this.http
      .post(API + '/answers', answer)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  updateAnswer(answer) {
    return this.http
      .patch(API + `/answers/${answer.id}`, answer)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  deleteAnswer(id) {
    return this.http
      .delete(API + `/answers/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  postUser(body){
    return this.http
      .post(API + `/users`, body)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loginUser(body){
    return this.http
      .get(API + `/users?email=${body.email}&password=${body.password}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadMostActiveUsers(){
    return this.http
      .get(API + `/users?_sort=answer_count&_order=desc&_page=1&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  updateUser(user){
    return this.http
      .patch(API + `/users/${user.id}`, user)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadUserAnswer({ userId, questionId }){
    return this.http
      .get(API + `/answers?authorId=${userId}&questionId=${questionId}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadMyQuestions(userId){
    return this.http
      .get(API + `/questions?authorId=${userId}&_sort=created_at&_order=desc&_page=1&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  getQuestionCount() {
    return this.http
      .get(API + `/count`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  updateQuestionCount(count){
    return this.http
      .patch(API + `/count`, { questions: count })
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  sendNotification(notification){
    return this.http
      .post(API + '/notifications', notification)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  openNotification(notificationId){
    return this.http
      .patch(API + `/notifications/${notificationId}`, { opened: true })
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  loadNotifications(userId){
    return this.http
      .get(API + `/notifications?userId=${userId}&_sort=created_at&_order=desc&_page=1&_limit=20`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }


}
