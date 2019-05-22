import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menuslider',
  templateUrl: './menuslider.component.html',
  styleUrls: ['./menuslider.component.css']
})
export class MenusliderComponent {

      constructor( public config: NgbCarouselConfig ) {
      config.interval = 2000;
      config.wrap = true;
        config.keyboard  = false;
        config.pauseOnHover = true;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
  }
  }

