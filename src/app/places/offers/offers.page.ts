import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Places } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedPlaces: Places[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
  }

}
