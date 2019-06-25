import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  Lender : any =['Small select1','Small select2','Small select3'];
  TaxType:any=['FTIN','SSN','State Col. ID'];
  Ftin:any=['Partner','Corporate Office','Tenant','Trustee','Elected Officials','Government Officials','Member','Employee'];
  Borrower:any=['Small select1','Small select2','Small select3'];
  State:any=[];
  County:any=[];
  LegislativeDistrict:any=[];
  CongressionalDistrict=[];
  submitted=false;

  addLoanForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.addLoanForm =this.formBuilder.group({
      lender:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      ename:['',Validators.required],
      taxtype:['',Validators.required],
      ftin:['',Validators.required],
      relationship:['',Validators.required],
      borrower:['',Validators.required],
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
  onSubmit()
    {  
      this.submitted = true;

        // stop here if form is invalid
        if (this.addLoanForm.invalid) {
            return;
        }
      }

}
