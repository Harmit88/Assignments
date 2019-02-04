import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.css']
})
export class VoteComponentComponent implements OnInit 
{

  constructor() { }

  ngOnInit() {
  }

  totalVotes=0;

  upVote():void {
    this.totalVotes++;
    console.log(this.totalVotes);
  }
  downVote():void {
    this.totalVotes--;
    console.log(this.totalVotes);
  }
}
