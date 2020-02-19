import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { timeDifference } from '../../utils/time-diff';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionItemComponent implements OnInit {

  @Input() question : Question;
  @Output() upvoteQuestion: EventEmitter<Object> = new EventEmitter();
  @Output() downvoteQuestion: EventEmitter<Object> = new EventEmitter();

  timeDifference = timeDifference;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuestionInfo(){
    this.router.navigate(['/question', this.question.id]);
  }

  upvote(upvotes){
    this.upvoteQuestion.emit({ id: this.question.id, upvotes: upvotes });
  }

  downvote(downvotes){
    this.downvoteQuestion.emit({ id: this.question.id, downvotes: downvotes });
  }
  
  


}
