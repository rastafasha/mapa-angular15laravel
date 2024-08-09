import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimeneLhComponent } from './crimene-lh/crimene-lh.component';
import { DatosVictimasComponent } from './datos-victimas/datos-victimas.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { MapaComponent } from './mapa/mapa.component';
import { ViolacionesDdhhComponent } from './violaciones-ddhh/violaciones-ddhh.component';
import { VideoComponent } from './video/video.component';




@NgModule({
  declarations: [
    CrimeneLhComponent,
    DatosVictimasComponent,
    ListaPaisesComponent,
    MapaComponent,
    ViolacionesDdhhComponent,
    VideoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrimeneLhComponent,
    DatosVictimasComponent,
    ListaPaisesComponent,
    MapaComponent,
    ViolacionesDdhhComponent,
    VideoComponent
  ],
})
export class ComponentsModule { }
