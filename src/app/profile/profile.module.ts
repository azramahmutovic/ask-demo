import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ChangePassModalComponent } from './change-pass-modal/change-pass-modal.component';

const routes : Routes = [{
  path: '', 
  component: ProfileComponent
}]


@NgModule({
  declarations: [ProfileComponent, ChangePassModalComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
