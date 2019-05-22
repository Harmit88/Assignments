import { Component, OnInit } from '@angular/core';
declare let L: any;
declare let tomtom: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  ngOnInit() {
       const speedyPizzaCoordinates = [41.241214, -96.014890];
     const  map = tomtom.L.map('map', {
          key: '3geLYHZModVxstFNGteHLTDBiDX6gJ8G',
          basePath: '/assets/sdk',
          center: speedyPizzaCoordinates,
           zoom: 15,
          source : 'vector'

        });

        const marker = tomtom.L.marker(speedyPizzaCoordinates).addTo(map);
         marker.bindPopup('your company name, your company address').openPopup();
         marker.bindPopup('<b>Freezing Ice-Cream</b><br/>1918 S. 67th St.Omaha NE 68106');
         console.log('this is map' + map);
         console.log(L);
  }
}


