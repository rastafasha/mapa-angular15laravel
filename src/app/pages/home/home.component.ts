import { Component, Input, OnInit } from '@angular/core';
import { PaisResponsive } from '../../interfaces/pais.interface';
import { MapaService } from '../../services/services/mapa.service';
import { PaisService } from '../../services/services/pais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year: number = new Date().getFullYear();

  @Input() paisrespuesta:PaisResponsive;
  @Input() paisrespuestacrimenes:PaisResponsive;
  @Input() paisrespuestaViolaciones:PaisResponsive;
  @Input() paisrespuestaDatosv:PaisResponsive;

  @Input() paiseslists: PaisResponsive;
 error: {};

 constructor(){ }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.closeMenu();
  }


  closeMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
        menuLateral[i].classList.remove("cbp-spmenu-open");
        // console.log(colorPais)

      }
  }



}
