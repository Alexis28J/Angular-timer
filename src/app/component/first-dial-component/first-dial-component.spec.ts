import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDialComponent } from './first-dial-component';

describe('FirstDialComponent', () => {
  let component: FirstDialComponent;
  let fixture: ComponentFixture<FirstDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
