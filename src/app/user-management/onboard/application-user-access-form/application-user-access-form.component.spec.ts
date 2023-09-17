import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUserAccessFormComponent } from './application-user-access-form.component';

describe('ApplicationUserAccessFormComponent', () => {
  let component: ApplicationUserAccessFormComponent;
  let fixture: ComponentFixture<ApplicationUserAccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationUserAccessFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationUserAccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
