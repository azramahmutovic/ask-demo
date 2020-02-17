import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotesComponent implements OnInit {

  @Input() upvotes : number;
  @Input() downvotes : number;
  @Input() upvoted : boolean;
  @Input() downvoted: boolean;
  @Output() upvote: EventEmitter<number> = new EventEmitter();
  @Output() downvote: EventEmitter<number> = new EventEmitter();
 

  constructor() {}

  ngOnInit(): void {}

  upvoteClick(){
    if(!this.upvoted){
      this.upvote.emit(this.upvotes+1);
    }   
  }

  downvoteClick(){
    if(!this.downvoted){
      this.downvote.emit(this.downvotes+1);
    }    
  }

}
