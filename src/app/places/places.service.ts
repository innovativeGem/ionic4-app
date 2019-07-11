import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      "p1",
      "Melbourne Burwood Campus",
      "Just 30 minutes from Melbourne's city centre, the Melbourne Burwood Campus is Deakin's largest campus (by number of students). Explore our facilities now.",
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
      149.99
    ),
    new Place(
      "p2",
      "Geelong Waurn Ponds Campus",
      "Deakin's Waurn Ponds Campus hosts world-class education programs and facilities in a picturesque, rural environmental.",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
      189.50
    ),
    new Place(
      "p3",
      "Warrnambool Campus",
      "Three hours from Melbourne, Warrnambool is a welcoming campus, close to the town centre and some beautiful surf beaches. Explore our facilities now.",
      "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2285&q=80",
      99.00
    )
  ];

  getPlaces() {
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)}
  }
  constructor() { }
}
