import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { HomelinksComponent } from './homelinks/homelinks.component';
import { SignerStepComponent } from './signer-step/signer-step.component';
import { ProjectStepComponent } from './project-step/project-step.component';

const routes: Routes = [
  {path :'NewLoan' , component:AddLoanComponent },
  {path :'',component:HomelinksComponent},
  {path : 'NewLoan/Signer' , component:SignerStepComponent},
  {path :'NewLoan/Signer/Project' , component:ProjectStepComponent},
  {path:'Home',component:HomelinksComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
