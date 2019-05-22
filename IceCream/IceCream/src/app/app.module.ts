import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { GallaryComponent } from './gallary/gallary.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LocationComponent } from './location/location.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { MenusliderComponent } from './menuslider/menuslider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    GallaryComponent,
    ContactUsComponent,
    LocationComponent,
    AllDetailsComponent,
    MenusliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
        {path: 'Gallary', component: GallaryComponent},
        { path: 'Home', component: MenusliderComponent},
        { path: 'ContactUs', component: ContactUsComponent},
        { path: 'Locations', component: LocationComponent},
        { path: '', component: MenusliderComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
