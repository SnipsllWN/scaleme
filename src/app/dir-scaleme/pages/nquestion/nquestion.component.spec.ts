import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NquestionComponent } from './nquestion.component';

describe('NquestionComponent', () => {
  let component: NquestionComponent;
  let fixture: ComponentFixture<NquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NquestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
