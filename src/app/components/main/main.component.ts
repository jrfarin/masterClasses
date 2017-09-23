import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent {

  constructor( public _is:InformacionService ) { }

}
