import { Component, OnDestroy } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'dummy-app';

  private subscription: Subscription;
  public message?: string;

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('#').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });

    _mqttService.onError
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
