import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private route:ActivatedRoute, private navCtrl:NavController, private placesService: PlacesService) { }

  handleBackNav() {
    this.navCtrl.navigateBack("/places/tabs/discover");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has("placeId")){
        this.handleBackNav();
        return;
      }

      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    })
  }

}