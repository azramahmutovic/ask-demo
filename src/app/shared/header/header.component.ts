import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn$ : Observable<boolean>;
  
  constructor(private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.loggedIn$ = this.store$.select(fromStore.selectProfileLoggedIn);
  }

  logout(){
    this.store$.dispatch(new fromActions.LogOut());
  }

}
