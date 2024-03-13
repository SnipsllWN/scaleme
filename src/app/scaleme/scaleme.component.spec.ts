import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalemeComponent } from './scaleme.component';

describe('ScalemeComponent', () => {
  let component: ScalemeComponent;
  let fixture: ComponentFixture<ScalemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScalemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScalemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
