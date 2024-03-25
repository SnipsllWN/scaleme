import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerquestionBoxComponent } from './answerquestion-box.component';

describe('AnswerquestionBoxComponent', () => {
  let component: AnswerquestionBoxComponent;
  let fixture: ComponentFixture<AnswerquestionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerquestionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnswerquestionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
