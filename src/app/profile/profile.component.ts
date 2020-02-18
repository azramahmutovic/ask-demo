import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  profileForm: FormGroup;
  profile: Profile;
  changePassModal = false;

  constructor(private formBuilder: FormBuilder, private store: Store<fromStore.State>) { }

  ngOnInit(): void {

    this.store.select(fromStore.selectProfileInfo).subscribe(profile => {
        this.profile = profile;
        if(!!profile)
          this.profileForm = this.formBuilder.group({
            first_name: [{ value: profile.first_name, disabled: true }, Validators.compose([Validators.required])],
            last_name: [{ value: profile.last_name, disabled: true }, Validators.compose([Validators.required])],
            email: [{ value: profile.email, disabled: true }, Validators.compose([Validators.required, Validators.email])],
          });
    })
    
  }

  ctrl(controlName: string): AbstractControl {
    return this.profileForm.get(controlName);
  }

  enableInput(controlName){
    this.ctrl(controlName).enable();
  }

  saveChanges(controlName){
    if(this.ctrl(controlName).valid){
      this.store.dispatch(new fromActions.UpdateUser({ id: this.profile.id, [controlName] : this.ctrl(controlName).value }));
      this.ctrl(controlName).disable();
    }
      
  }

  changePass({ password }){
    this.store.dispatch(new fromActions.UpdateUser({ id: this.profile.id, password }));
    this.changePassModal = false;
  }



}
