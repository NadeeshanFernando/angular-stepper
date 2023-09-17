import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardFormsTabComponent } from './onboard-forms-tab.component';

describe('OnboardFormsTabComponent', () => {
  let component: OnboardFormsTabComponent;
  let fixture: ComponentFixture<OnboardFormsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardFormsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardFormsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
