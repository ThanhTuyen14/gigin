import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GumiFunnyStoryComponent } from './gumi-funny-story.component';

describe('GumiFunnyStoryComponent', () => {
  let component: GumiFunnyStoryComponent;
  let fixture: ComponentFixture<GumiFunnyStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GumiFunnyStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GumiFunnyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
