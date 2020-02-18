import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-change-pass-modal',
  templateUrl: './change-pass-modal.component.html',
  styleUrls: ['./change-pass-modal.component.scss']
})
export class ChangePassModalComponent implements OnInit {

  passForm: FormGroup;

  @Input() opened;
  @Output() changePass : EventEmitter<Object> = new EventEmitter<Object>();
  @Output() cancel : EventEmitter<void> = new EventEmitter<void>();
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.passForm = this.formBuilder.group({
      old_password: ['', Validators.compose([Validators.required])],
      password: [ '', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  ctrl(controlName: string): AbstractControl {
    return this.passForm.get(controlName);
  }

}
