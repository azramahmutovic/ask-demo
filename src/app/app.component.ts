import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import * as fromActions from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ask-app';

  constructor(private store$: Store<fromStore.State>){

  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if(currentUser)
      this.store$.dispatch(new fromActions.Login({ email: currentUser.email, password: currentUser.password}))
  }
}
