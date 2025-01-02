import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxGameComponent } from './relax-game.component';

describe('RelaxGameComponent', () => {
  let component: RelaxGameComponent;
  let fixture: ComponentFixture<RelaxGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelaxGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaxGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
