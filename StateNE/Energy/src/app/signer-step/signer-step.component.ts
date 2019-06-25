import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signer-step',
  templateUrl: './signer-step.component.html',
  styleUrls: ['./signer-step.component.css']
})
export class SignerStepComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  disableButton: boolean =false;
 

  constructor() { }

  ngOnInit() {
  }

  showTab(){
    this.show= !this.show;
    this.disableButton=true;
    
  }
}
