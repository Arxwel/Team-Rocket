import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketdexComponent } from './rocketdex.component';

describe('RocketdexComponent', () => {
  let component: RocketdexComponent;
  let fixture: ComponentFixture<RocketdexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketdexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
