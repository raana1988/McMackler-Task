import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayApartmentComponent } from './display-apartment/display-apartment.component';
import { HttpModule } from '@angular/http'
import { ApartementService } from './apartement.service'


@NgModule({
  declarations: [
    AppComponent,
    DisplayApartmentComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [ApartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
