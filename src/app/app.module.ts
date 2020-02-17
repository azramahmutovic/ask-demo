import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuestionEffects, AnswerEffects, ProfileEffects, HotQuestionEffects, CommunityEffects } from './store/effects';
import { reducers } from './store/reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const effects = [
  QuestionEffects,
  AnswerEffects,
  ProfileEffects,
  HotQuestionEffects,
  CommunityEffects
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
