import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiginStoryComponent } from './gigin-story.component';

describe('GiginStoryComponent', () => {
  let component: GiginStoryComponent;
  let fixture: ComponentFixture<GiginStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiginStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiginStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
