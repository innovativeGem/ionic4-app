import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Places } from '../places.model';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Places[];

  constructor(private places: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.places.getPlaces();
  }

}
