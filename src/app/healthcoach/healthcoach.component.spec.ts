import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcoachComponent } from './healthcoach.component';

describe('HealthcoachComponent', () => {
  let component: HealthcoachComponent;
  let fixture: ComponentFixture<HealthcoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthcoachComponent]
    });
    fixture = TestBed.createComponent(HealthcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
