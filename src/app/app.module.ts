import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.hivemq.com',
  protocol: 'ws',
  path: '/mqtt',
  port: 8000,
  clientId: 'dummy-858768494'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
