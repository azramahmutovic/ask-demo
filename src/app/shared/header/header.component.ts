import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';
import { Observable } from 'rxjs';
import { Notif } from 'src/app/models/notif.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn$ : Observable<boolean>;
  notificationsList = false;
  notifications$ : Observable<Notif[]>;
  alert$ : Observable<number>;
  refreshInterval;
  userId : number;
  
  constructor(private store$: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.loggedIn$ = this.store$.select(fromStore.selectProfileLoggedIn);
    this.notifications$ = this.store$.select(fromStore.selectMyNotifications);
    this.alert$ = this.store$.select(fromStore.selectUnreadNotifications);
    this.store$.select(fromStore.selectProfileId).subscribe(id => this.userId = id)
    this.store$.dispatch(new fromActions.LoadNotifications(this.userId));
    this.refreshInterval = setInterval(() => {
      if(this.userId)
        this.store$.dispatch(new fromActions.LoadNotifications(this.userId));
    }, 30000);
  }

  logout(){
    this.store$.dispatch(new fromActions.LogOut());
  }

  openNotification(id){
    this.store$.dispatch(new fromActions.OpenNotification(id))
  }

  ngOnDestroy() {
    clearTimeout(this.refreshInterval);
  }
  
}
