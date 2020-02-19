import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notif } from 'src/app/models/notif.model';
import { timeDifference } from '../../utils/time-diff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {
  
  timeDifference = timeDifference;
  @Input() opened : boolean;
  @Input() notifications : Notif[];
  @Output() openNotification : EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickNotification(notification){
    this.openNotification.emit(notification.id)
    this.router.navigate(['question', notification.questionId]);
  }

}
