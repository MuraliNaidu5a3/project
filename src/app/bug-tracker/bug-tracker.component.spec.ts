import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTrackerComponent } from './bug-tracker.component';

describe('BugTrackerComponent', () => {
  let component: BugTrackerComponent;
  let fixture: ComponentFixture<BugTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
