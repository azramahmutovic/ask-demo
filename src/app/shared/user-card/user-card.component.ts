import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user : Profile;
  
  constructor() { }

  ngOnInit(): void {
  }

}
