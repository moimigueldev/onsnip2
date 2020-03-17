import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecommendationsComponent } from './profile-recommendations.component';

describe('ProfileRecommendationsComponent', () => {
  let component: ProfileRecommendationsComponent;
  let fixture: ComponentFixture<ProfileRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
