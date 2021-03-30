import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytweetsComponent } from './displaytweets.component';

describe('DisplaytweetsComponent', () => {
  let component: DisplaytweetsComponent;
  let fixture: ComponentFixture<DisplaytweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
