import { Component, OnInit } from '@angular/core';
declare let L: any;
declare let tomtom: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
    const speedyPizzaCoordinates = [40.815202, -96.700866 ];
       const map = tomtom.L.map('map', {
          key: '3geLYHZModVxstFNGteHLTDBiDX6gJ8G',
          basePath: '/assets/sdk',
          center: speedyPizzaCoordinates,
           zoom: 15,
          source : 'vector'

        });

        const marker = tomtom.L.marker(speedyPizzaCoordinates).addTo(map);
         marker.bindPopup('your company name, your company address,direction').openPopup();
// tslint:disable-next-line: max-line-length
         marker.bindPopup('<b>Lincoln</b><br/>Lincoln 210 N 14th Street Ste#6, Lincoln, NE 68508 <br/><a href="//maps.google.com/maps?saddr=current+location&daddr=210+N.+14th+St.%0D%0ALincoln+NE+68508%0D%0A" target="_blank" id="info">Get directions</a>');

      const speedyPizzaCoordinates1 = [41.241214, -96.014890];
       const map1 = tomtom.L.map('map1', {
          key: '3geLYHZModVxstFNGteHLTDBiDX6gJ8G',
          basePath: '/assets/sdk',
          center: speedyPizzaCoordinates1,
           zoom: 15,
          source : 'vector'

        });

        const marker1 = tomtom.L.marker(speedyPizzaCoordinates1).addTo(map1);
         marker1.bindPopup('your company name, your company address,direction').openPopup();
// tslint:disable-next-line: max-line-length
         marker1.bindPopup('<b>Omaha</b><br/>1918 S. 67th St.Omaha NE 68106 <br/><a href="//maps.google.com/maps?saddr=current+location&daddr=1918+S.+67th+St.%0D%0AOmaha+NE+68106%0D%0A" target="_blank" id="info">Get directions</a>');
         console.log('this is map' + map1);
         console.log(L);
  }

}
