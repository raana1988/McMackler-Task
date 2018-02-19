import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ApartementService } from '../apartement.service'
import { ApartementModel } from '../apartementModel';


@Component({
  selector: 'app-display-apartment',
  templateUrl: './display-apartment.component.html',
  styleUrls: ['./display-apartment.component.css']
})
export class DisplayApartmentComponent implements OnInit {

  public AdsList: Array<ApartementModel> = [];

  constructor(private service:ApartementService) {
   
  }


    ngOnInit(){
     this.service.getAds().subscribe(
       data => {this.AdsList = data;
        console.log(this.AdsList)
      });
     
    }
  

  

}
