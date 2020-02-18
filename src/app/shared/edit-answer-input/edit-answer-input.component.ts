import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/answer.model';


@Component({
  selector: 'app-edit-answer-input',
  templateUrl: './edit-answer-input.component.html',
  styleUrls: ['./edit-answer-input.component.scss']
})
export class EditAnswerInputComponent implements OnInit {

  @Input() answer: Answer;
  @Output() editAnswer : EventEmitter<Object> = new EventEmitter<Object>();
  @Output() deleteAnswer : EventEmitter<Object> = new EventEmitter<Object>();
  editForm: FormGroup;
  answerText : string;
  editMode = false;
  deleteModal = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      text: [ this.answerText, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(600)])],
    })
    this.ctrl('text').disable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.answer){
      this.answerText = changes.answer.currentValue.body;
    }
  }

  ctrl(controlName: string): AbstractControl {
    return this.editForm.get(controlName);
  }

  enableEditMode(){
    this.editMode = true;
    this.ctrl('text').enable();
  }

  save(){
    if(this.editForm.valid){
      this.editAnswer.emit({ id: this.answer.id, body: this.ctrl('text').value })
      this.editMode = false;
      this.ctrl('text').disable();
    }
  }

  openModal(){
    this.deleteModal = true;
  }

  delete(){
    console.log('delete emit')
    this.deleteAnswer.emit(this.answer.id)
  }

}
