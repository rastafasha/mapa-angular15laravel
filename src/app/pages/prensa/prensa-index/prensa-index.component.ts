import { Component, OnInit } from '@angular/core';
import{ Prensa} from '../../../models/prensa';
import {PrensaService} from '../../../services/services/prensa.service';

@Component({
  selector: 'app-prensa-index',
  templateUrl: './prensa-index.component.html',
  styleUrls: ['./prensa-index.component.css']
})
export class PrensaIndexComponent implements OnInit {

  articulos: Prensa;

  p: number = 1;
  count: number = 5;
  constructor(
    public prensaService: PrensaService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getArticulos();
    this.closeMenu();
  }

  getArticulos(){
    this.prensaService.getPrensas().subscribe(
      resp => {
        this.articulos = resp;
      },
      err => console.error('Hay un error al obtener la lista')
      );
      // console.log(this.articulos);
  }

  closeMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
        menuLateral[i].classList.remove("cbp-spmenu-open");
        // console.log(colorPais)

      }
  }

}
