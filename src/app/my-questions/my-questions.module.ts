import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from '../shared/shared.module';

import { MyQuestionsComponent } from './my-questions.component';

const routes : Routes = [{
  path: '', 
  component: MyQuestionsComponent
}]

@NgModule({
  declarations: [MyQuestionsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MyQuestionsModule { }
