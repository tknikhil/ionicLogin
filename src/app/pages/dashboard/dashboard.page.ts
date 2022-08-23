import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { Capacitor } from '@capacitor/core';
import { GoogleMap } from '@capacitor/google-maps';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { LatLng } from '@capacitor-community/capacitor-googlemaps-native/dist/esm/types/common/latlng.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    public authService: AuthServiceService,
    public alertCtrl: AlertController
  ) {}
  ngOnInit() {
    // this.createMap();
  }
}
