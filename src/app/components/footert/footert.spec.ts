import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footert } from './footert';

describe('Footert', () => {
  let component: Footert;
  let fixture: ComponentFixture<Footert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
