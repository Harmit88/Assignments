import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelinksComponent } from './homelinks/homelinks.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { FooterComponent } from './footer/footer.component';
import { SignerStepComponent } from './signer-step/signer-step.component';
import { ProjectStepComponent } from './project-step/project-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomelinksComponent,
    AddLoanComponent,
    FooterComponent,
    SignerStepComponent,
    ProjectStepComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
