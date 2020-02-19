import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TextInputComponent } from './text-input/text-input.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AnswerItemComponent } from './answer-item/answer-item.component';
import { VotesComponent } from './votes/votes.component';
import { EditAnswerInputComponent } from './edit-answer-input/edit-answer-input.component';
import { DeleteAnswerModalComponent } from './delete-answer-modal/delete-answer-modal.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroBannerComponent, 
    TextInputComponent, 
    QuestionItemComponent, 
    TabComponent, 
    TabsComponent, 
    UserCardComponent, 
    AnswerItemComponent, 
    VotesComponent,
    EditAnswerInputComponent,
    DeleteAnswerModalComponent,
    NotificationsListComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeroBannerComponent,
    TextInputComponent,
    QuestionItemComponent,
    TabComponent,
    TabsComponent,
    UserCardComponent,
    AnswerItemComponent,
    EditAnswerInputComponent,
    NotificationsListComponent
  ]
})
export class SharedModule { }
