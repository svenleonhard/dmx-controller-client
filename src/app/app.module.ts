import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SliderComponent } from './slider/slider.component';

import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import { FixtureCardComponent } from './fixture-card/fixture-card.component';
import { ControllerDeviceComponent } from './controller-device/controller-device.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SliderComponent,
    ConfigurationComponent,
    HomeComponent,
    FixtureCardComponent,
    ControllerDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapSliderModule,
    NgxNavbarModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
