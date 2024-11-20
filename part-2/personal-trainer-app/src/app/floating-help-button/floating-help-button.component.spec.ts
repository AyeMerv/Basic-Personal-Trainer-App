import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingHelpButtonComponent } from './floating-help-button.component';

describe('FloatingHelpButtonComponent', () => {
  let component: FloatingHelpButtonComponent;
  let fixture: ComponentFixture<FloatingHelpButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingHelpButtonComponent]
    });
    fixture = TestBed.createComponent(FloatingHelpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
