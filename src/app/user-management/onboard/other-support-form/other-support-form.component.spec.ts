import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSupportFormComponent } from './other-support-form.component';

describe('OtherSupportFormComponent', () => {
  let component: OtherSupportFormComponent;
  let fixture: ComponentFixture<OtherSupportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSupportFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
