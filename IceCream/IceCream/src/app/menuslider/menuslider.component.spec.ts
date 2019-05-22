import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusliderComponent } from './menuslider.component';

describe('MenusliderComponent', () => {
  let component: MenusliderComponent;
  let fixture: ComponentFixture<MenusliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
