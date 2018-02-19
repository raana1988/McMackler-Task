import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ApartementModel } from './apartementModel'

@Injectable()
export class ApartementService {

  constructor(private http:Http) { }

  getAds():Observable<ApartementModel[]>{
    return this.http.get('https://api.mcmakler.de/v1/advertisements')
    .map((res:any)=>res.json() as ApartementModel[])
  }


}
