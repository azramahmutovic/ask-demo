import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnswerModalComponent } from './delete-answer-modal.component';

describe('DeleteAnswerModalComponent', () => {
  let component: DeleteAnswerModalComponent;
  let fixture: ComponentFixture<DeleteAnswerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAnswerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAnswerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
