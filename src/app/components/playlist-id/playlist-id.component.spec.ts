import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistIdComponent } from './playlist-id.component';

describe('PlaylistIdComponent', () => {
  let component: PlaylistIdComponent;
  let fixture: ComponentFixture<PlaylistIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
