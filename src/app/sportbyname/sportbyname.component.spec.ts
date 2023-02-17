import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportbynameComponent } from './sportbyname.component';

describe('SportbynameComponent', () => {
  let component: SportbynameComponent;
  let fixture: ComponentFixture<SportbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportbynameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
