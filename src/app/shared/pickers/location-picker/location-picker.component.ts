import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Mode } from '@ionic/core';
import { MapModelComponent } from '../../map-model/map-model.component';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  constructor(public modelCtrl: ModalController) {}

  ngOnInit() {}
  onPickLocation() {
    this.modelCtrl.create({ component: MapModelComponent }).then((modelEl) => {
      modelEl.present();
    });
  }
}
