import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapaService } from 'src/app/services/services/mapa.service';
import { PaisService } from 'src/app/services/services/pais.service';

import { Pais} from '../../models/pais';
import { MapaComponent } from '../mapa/mapa.component';
import { PaisResponsive, PaisResponsivePartial } from '../../interfaces/pais.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

declare var $;
@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

@Input() usuarioInChild;
@Input() propagar;
@Input() paisrespuesta:PaisResponsive;

pais$:PaisResponsive;
stringJson: any;

public paises: PaisResponsive;

  constructor(
    private mapaService:MapaService,
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.mapaService.listen().subscribe((m:any) => {
      // console.log(m);
      this.onFilterClick(m);
      this.showInfo();
    })

  }
  onFilterClick(event) {
    //console.log('Fire onFilterClick: ', event);
    this.getPais(event);


}

  ngOnInit() {
     window.scrollTo(0, 0);
    //this.activarBotonColor();
    }



  getPais(event:string){
   const code = this.activatedRoute.snapshot.paramMap.get('event');//se llama el id requerido

    this.activatedRoute.params.subscribe( params =>{

      const code = this.paisService.getPaisCode(event).subscribe (
        (resp:any) => {

          this.paisrespuesta = resp.pais;
          //console.log(this.paisrespuesta);
          console.log(this.paisrespuesta);
          if (this.paisrespuesta === null) {
            this.paisrespuesta = {
              id: 0,
              title: 'No hay información',
              // code: this.paisrespuesta.code
            } as PaisResponsive;
          }
          this.stringJson = JSON.stringify(this.paisrespuesta).replace(/['"]+/g, '');
          //console.log("String json object :", this.stringJson);

        }
      )
    })

  }


  getPaiseslist(){
    this.paisService.getCarteleraPaises().subscribe(
      (resp:any) => {
        this.paises = resp.countryList;
      },
      err => console.error('Hay un error al obtener la lista')
      );
  }


  showInfo() {
    // Get the elements using document.querySelectorAll, which returns a NodeList
    const infoRespuesta = document.querySelectorAll(".hom");
    const logomove = document.querySelectorAll(".logo2");
    const texto = document.querySelectorAll(".texto");
  
    // Use the classList API to add the class "logomove" to each logo2 element
    logomove.forEach((logo) => logo.classList.add("logomove"));
    texto.forEach((logo) => logo.classList.add("textoMove"));
  
    // Use a forEach loop to iterate over the infoRespuesta NodeList
    infoRespuesta.forEach((info) => {
      // Remove the class "displayNonehome" from each element
      info.classList.remove("displayNonehome");
    });
  }

hideInfo() {
  // Get the elements using document.querySelectorAll, which returns a NodeList
  const infoRespuesta = document.querySelectorAll(".hom");
  const logomove = document.querySelectorAll(".logo2");
  const texto = document.querySelectorAll(".texto");
  
  // Use the classList API to add the class "logomove" to each logo2 element
  logomove.forEach((logo) => logo.classList.remove("logomove"));
  texto.forEach((logo) => logo.classList.remove("textoMove"));
  // Use a forEach loop to iterate over the infoRespuesta NodeList
  infoRespuesta.forEach((info) => {
    // Remove the class "displayNonehome" from each element
    info.classList.add("displayNonehome");
  });
}

  






}

