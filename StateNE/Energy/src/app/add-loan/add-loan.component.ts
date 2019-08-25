import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AllDataService } from '../all-data.service';
import { IaddLoan } from './add-loan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  Lender : any =['Small select1','Small select2','Small select3'];
  TaxType:any=['FTIN','SSN','State Col.ID'];
  Ftin:any=['Partner','Corporate Office','Tenant','Trustee','Elected Officials','Government Officials','Member','Employee'];
  Borrower:any=['Small select1','Small select2','Small select3'];
  State:any=['NE','CA'];
  County:any=['India','USA'];
  LegislativeDistrict:any=['abc'];
  CongressionalDistrict=['efj'];
  submitted=false;
  user:IaddLoan[];

  addLoanForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private _AllDataService:AllDataService,
              private router :Router) { }
             

  ngOnInit():void {

    this._AllDataService.getDetails().subscribe((data)=> this.user = data)
  
    this.addLoanForm =this.formBuilder.group({ 
      lender:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      ename:['',Validators.required],
      taxtype:['',Validators.required],
      ftin:['',Validators.required],
      relationship:['',Validators.required],
      borrower:['',Validators.required],
      phonenumber:['',Validators.required],
      address1:['',Validators.required],
      address2:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required],
      county:['',Validators.required],
      lDistrict:['',Validators.required],
      cDistrict:['',Validators.required]
    })
  }
  get f() {return this.addLoanForm.controls}
  onSubmit()
    {  
     /* if (this.addLoanForm.valid)
       { 
      this.submitted = true;
      console.log(this.addLoanForm.value)
      this._AllDataService.CreateDetails(this.addLoanForm.value).subscribe(data =>{
        this.router.navigate(['/NewLoan/Signer']);
        console.log(data)
      })
      }
      else{

        return;
      } */
      
      
      this.submitted = true;
      if (this.addLoanForm.invalid){
        return;
      }
else{
  this._AllDataService.CreateDetails(this.addLoanForm.value).subscribe(data =>{
    this.router.navigate(['/NewLoan/Signer']);
  });
}

    
      

    
        // stop here if form is invalid
        
      }

}
