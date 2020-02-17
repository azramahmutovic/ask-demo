import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from '../shared/shared.module';

import { SignupComponent } from './signup.component';

const routes : Routes = [{
  path: '', 
  component: SignupComponent
}]

@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SignupModule { }
