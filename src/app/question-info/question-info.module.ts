import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from '../shared/shared.module';

import { QuestionInfoComponent } from './question-info.component';


const routes : Routes = [{
  path: '', 
  component: QuestionInfoComponent
}]

@NgModule({
  declarations: [QuestionInfoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class QuestionInfoModule { }
