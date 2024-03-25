import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanswerComponent } from './nanswer.component';

describe('NanswerComponent', () => {
  let component: NanswerComponent;
  let fixture: ComponentFixture<NanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NanswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
