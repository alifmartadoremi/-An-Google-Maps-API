import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  private map!:google.maps.Map;

  ngOnInit(): void{
    let loader = new Loader({
      apiKey: 'AIzaSyAFuKjwgAg-yNhEg0B9fsEPf4kWD8Dg7uQ'
    })

    loader.load().then(() => {
      console.log('Loading.')

      const location =  { lat: -6.3444852, lng: 106.7351288}

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
