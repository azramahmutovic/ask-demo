import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-answer-modal',
  templateUrl: './delete-answer-modal.component.html',
  styleUrls: ['./delete-answer-modal.component.scss']
})
export class DeleteAnswerModalComponent implements OnInit {

  @Input() opened;
  @Output() delete : EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
