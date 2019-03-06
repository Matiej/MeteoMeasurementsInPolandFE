import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCityComponent } from './online-city.component';

describe('OnlineCityComponent', () => {
  let component: OnlineCityComponent;
  let fixture: ComponentFixture<OnlineCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
