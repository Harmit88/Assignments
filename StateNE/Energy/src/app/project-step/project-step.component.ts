import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-step',
  templateUrl: './project-step.component.html',
  styleUrls: ['./project-step.component.css']
})
export class ProjectStepComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  disableButton: boolean =false;

  constructor() { }

  ngOnInit() {
  }
  showTab(){
    this.show=!this.show;
    this.disableButton=true;
  }
}
