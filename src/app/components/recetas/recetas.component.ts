import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';

@Component({
    selector: 'app-recetas',
    templateUrl: './recetas.component.html'

})
export class RecetasComponent {

    constructor( public _rs:RecetasService ) { }

}
