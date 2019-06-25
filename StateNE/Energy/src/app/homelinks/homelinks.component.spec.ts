import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelinksComponent } from './homelinks.component';

describe('HomelinksComponent', () => {
  let component: HomelinksComponent;
  let fixture: ComponentFixture<HomelinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
