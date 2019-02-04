import { async, TestBed } from '@angular/core/testing';

import { VoteComponentComponent } from './vote-component.component';

describe('VoteComponentComponent', () => {
  let component: VoteComponentComponent;
  //let fixture: ComponentFixture<VoteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
   // fixture = TestBed.createComponent(VoteComponentComponent);
    component = new VoteComponentComponent;
    //fixture.detectChanges();
  });
 afterEach(() => {

 });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increment votes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement votes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
