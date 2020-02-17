import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromActions from '../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFail$ : Observable<boolean>;

  constructor(private formBuilder: FormBuilder, private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [ '', Validators.required],
      password: [ '', Validators.required],
    });
    this.loginFail$ = this.store.select(fromStore.selectProfileLoginFail);
  }

  ctrl(controlName: string): AbstractControl {
    return this.loginForm.get(controlName);
  }

  submit(){
    this.store.dispatch(new fromActions.Login({ 
      email: this.ctrl('email').value, 
      password: this.ctrl('password').value, 
    }));
  }

}
