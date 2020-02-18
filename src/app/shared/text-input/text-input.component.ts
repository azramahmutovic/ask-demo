import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Answer } from 'src/app/models/answer.model';

//this component can be used to post both questions and answers,
//depending on the Input() mode passed
const modes = {
  QUESTION: 'question',
  ANSWER: 'answer',
}

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  postForm: FormGroup;
  @Input() buttonText : string;
  @Input() inputLabel : string;
  @Input() answer : Answer;
  @Input() mode: string;
  @Output() addQuestion : EventEmitter<string> = new EventEmitter<string>();
  @Output() addAnswer : EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      text: [ '', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(600)])],
    })
  }

  ctrl(controlName: string): AbstractControl {
    return this.postForm.get(controlName);
  }

  post(): void {
    if(this.postForm.valid){
      if(this.mode === modes.QUESTION)
        this.addQuestion.emit(this.ctrl('text').value)
      else if(this.mode === modes.ANSWER)
        this.addAnswer.emit(this.ctrl('text').value)
      this.postForm.reset();
    }
  }

}
