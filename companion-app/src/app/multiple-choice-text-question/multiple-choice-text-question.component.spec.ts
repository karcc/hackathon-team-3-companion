import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceTextQuestionComponent } from './multiple-choice-text-question.component';

describe('MultipleChoiceTextQuestionComponent', () => {
  let component: MultipleChoiceTextQuestionComponent;
  let fixture: ComponentFixture<MultipleChoiceTextQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceTextQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceTextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
