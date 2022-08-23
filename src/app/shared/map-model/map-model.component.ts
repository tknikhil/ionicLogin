import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-model',
  templateUrl: './map-model.component.html',
  styleUrls: ['./map-model.component.scss'],
})
export class MapModelComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElementRef: ElementRef;
  mapEl: any;
  constructor(public modelCtrl: ModalController, public rendera: Renderer2) {}

  ngAfterViewInit(): void {
    this.getGoogleMap()
      .then((googleMaps) => {
        this.mapEl = this.mapElementRef.nativeElement;
        const map = new googleMaps.Map(this.mapEl, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 16,
        });

        googleMaps.event.addListenerOnce(map, 'idle', () => {
          this.rendera.addClass(this.mapEl, 'visiable');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onViewEditer(event: any) {
    this.mapEl.emit(event);
  }

  ngOnInit() {}

  onCancel() {
    this.modelCtrl.dismiss();
  }

  private getGoogleMap(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyB-4yP4H61wkDxwHhCUzGJOrmzCiZPx-5g';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK not Avaliable!');
        }
      };
    });
  }
}
