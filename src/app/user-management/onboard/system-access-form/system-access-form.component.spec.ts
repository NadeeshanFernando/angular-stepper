import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAccessFormComponent } from './system-access-form.component';

describe('SystemAccessFormComponent', () => {
  let component: SystemAccessFormComponent;
  let fixture: ComponentFixture<SystemAccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAccessFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
