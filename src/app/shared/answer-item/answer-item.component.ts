import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { timeDifference } from '../../utils/time-diff';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerItemComponent implements OnInit {

  @Input() answer;
  @Output() upvoteAnswer: EventEmitter<Object> = new EventEmitter();
  @Output() downvoteAnswer: EventEmitter<Object> = new EventEmitter();
  timeDifference = timeDifference;

  constructor() { }

  ngOnInit(): void {
  }

  upvote(upvotes){
    this.upvoteAnswer.emit({ id: this.answer.id, upvotes: upvotes });
  }

  downvote(downvotes){
    this.downvoteAnswer.emit({ id: this.answer.id, downvotes: downvotes });
  }

}
