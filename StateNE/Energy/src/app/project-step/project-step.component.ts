import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-step',
  templateUrl: './project-step.component.html',
  styleUrls: ['./project-step.component.css']
})
export class ProjectStepComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  disableButton: boolean =false;
  ProjectCategory: any =['Agriculture','Alternate Fuel','Business','Climate Wise','Energy Efficient housing','Energy Star Partner','Local Government','Non-Profit','Rebuild NE','Residential','Telecommunications','Energy Star Certified Equipment','Wind,Solar & Fuel Cell Systems','State Government','Waste Minimization']
  legalDescription: any ;
  state:any=['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Idaho','Hawaii','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  county:any=['1','2','3'];
  ldistrict:any=['1','2','3'];
  cdistrict:any=['1','2','3'];

  ProjectForm:FormGroup

  constructor(private Fb :FormBuilder  ) { }



  ngOnInit() {
    this.ProjectForm = this.Fb.group({
      ProjectCategory:['',Validators.required],
      legalDescription:['' ,Validators.required],
      address1:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required],
      county:['',Validators.required],
      ldistrict:['',Validators.required],
      cdistrict:['',Validators.required],
      cofimprovement:['',Validators.required],
      eligibleForLoan:['',Validators.required],
      lenderloan:['',Validators.required]
    })

  
  }
  showTab(){
    this.show=!this.show;
    this.disableButton=true;
  }
}
