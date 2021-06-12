import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private map!:google.maps.Map;

  ngOnInit(): void{
    let loader = new Loader({
      apiKey: 'AIzaSyAFuKjwgAg-yNhEg0B9fsEPf4kWD8Dg7uQ'
    })

    loader.load().then(() => {
      console.log('Loading.')

      const location =  { lat: -6.2661921, lng: 106.6851337}

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 15,
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
}
