import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RecetasService {

    infoRecetas:any[] = [];
    loaded:boolean = false;

    constructor( public http:Http) {
        this.infoLoaded();
    }

    public infoLoaded(){
      this.http.get("https://coolinary-dadf5.firebaseio.com/recetas.json")
               .subscribe( data=>{
                   console.log(data.json());
                   this.loaded = true;
                   this.infoRecetas = data.json();
               });
    }

}
