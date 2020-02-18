import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnswerInputComponent } from './edit-answer-input.component';

describe('EditAnswerInputComponent', () => {
  let component: EditAnswerInputComponent;
  let fixture: ComponentFixture<EditAnswerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnswerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnswerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
