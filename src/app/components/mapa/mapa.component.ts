import { Component, EventEmitter, Input, OnInit,  Output, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { PaisService } from '../../services/services/pais.service';
import { PaisResponsive } from '../../interfaces/pais.interface';
import { MapaService } from 'src/app/services/services/mapa.service';
import { HttpClient } from '@angular/common/http';
import { Pais } from 'src/app/models/pais';





@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent  implements OnInit{


  @Output() propagar: EventEmitter<string> = new EventEmitter();
  @Output() paisrespuesta: string;
  //@Output() paisrespuesta = 'conexion desde mapa';

  value: Observable<PaisResponsive>;
  public paises: Pais[];

  ServerUrl = environment.url_backend;
  public status;
  public code;


  error: string;

  public serverUrl = environment.url_backend;

  public pais: PaisResponsive;



  constructor(
    private paisService: PaisService,
    private mapaService: MapaService,
    private activatedRoute: ActivatedRoute,
    ) {
    }

  ngOnInit() {
    this.activarBotonColor();
  }


  botonActivo(event) {
    //llamamos el id seleccionado
    const idAttr = event.srcElement.attributes.id;
    const value = idAttr.nodeValue;
    this.mapaService.filter(value);

    console.log(value);
  }

  activarBotonColor(): void {
    this.paisService.getPaises().subscribe((resp: any) => {
      this.paises = resp.countries;
      console.log(this.paises);
      this.highlightActiveCountries();
    });
  }
  
  private highlightActiveCountries(): void {
    const countryElements = document.getElementsByClassName("land");
    this.paises.forEach((pais) => {
      if (pais.isActive === 'isVisible') {
        countryElements[pais.code].classList.add("activo");
      }
    });
  }






}
