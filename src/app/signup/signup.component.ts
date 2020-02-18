import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: [ '', Validators.compose([Validators.required, Validators.email])],
      password: [ '', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  ctrl(controlName: string): AbstractControl {
    return this.registerForm.get(controlName);
  }

  submit(){
    this.store.dispatch(new fromActions.Signup({ 
      email: this.ctrl('email').value, 
      password: this.ctrl('password').value, 
      first_name: this.ctrl('firstName').value,
      last_name: this.ctrl('lastName').value,
      answer_count: 0,
      question_count: 0
    }));
  }


}
