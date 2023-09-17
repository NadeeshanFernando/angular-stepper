import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSuccessComponent } from './common-success.component';

describe('CommonSuccessComponent', () => {
  let component: CommonSuccessComponent;
  let fixture: ComponentFixture<CommonSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
