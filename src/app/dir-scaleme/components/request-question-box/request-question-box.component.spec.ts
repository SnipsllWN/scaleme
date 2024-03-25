import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQuestionBoxComponent } from './request-question-box.component';

describe('RequestQuestionBoxComponent', () => {
  let component: RequestQuestionBoxComponent;
  let fixture: ComponentFixture<RequestQuestionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestQuestionBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestQuestionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
