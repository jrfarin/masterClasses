import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InformacionService {

  infoReceta:any[] = [];
  loaded:boolean = false;

  constructor( public http:Http) {
      this.infoLoaded();
  }

  public infoLoaded(){
      this.http.get("https://coolinary-dadf5.firebaseio.com/talleres.json")
               .subscribe( data=>{
                   //console.log(data.json());
                   this.loaded = true;
                   this.infoReceta = data.json();
               });
  }

}
