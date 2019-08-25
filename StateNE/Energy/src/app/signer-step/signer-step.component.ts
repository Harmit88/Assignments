import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewSignerService } from './new-signer.services';
import { IaddNewSigner } from './add-new-signer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signer-step',
  templateUrl: './signer-step.component.html',
  styleUrls: ['./signer-step.component.css']
})
export class SignerStepComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  disableButton: boolean =false;
  submitted :boolean=false;

  newSignerForm : FormGroup
  user:IaddNewSigner[];
  taxtype: any =['FTIN','SSN','State Col. ID'];
  relationship:any=['Owner','Partner','Corporate Officer','Tenant','Trustee','Elected Official','Government Official','Member','Employee','None'];

 

  constructor( private formBuilder : FormBuilder,
               private _newSignerService :NewSignerService ,
               private router : Router) { }

  ngOnInit() {
    this._newSignerService.getSignerDetails().subscribe((data) => this.user = data)
    this.newSignerForm=this.formBuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      taxtype:['',Validators.required],
      ftin:['',Validators.required],
      relationship:['',Validators.required]
    })
  }

  showTab(){
    this.show= !this.show;
    this.disableButton=true;
  }

  onSubmit(){
    this.submitted=true;
    if(this.newSignerForm.invalid){
      return
    }
    else{
      
      this._newSignerService.createSigner(this.newSignerForm.value).subscribe(data =>{
        this.router.navigate(['/NewLoan/Signer/Project']);
      }
        )
    }

  }
}
