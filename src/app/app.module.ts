import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptors/index';
import Raphael from 'raphael';

//editor
import { CKEditorModule } from 'ckeditor4-angular';




// modulos

import {ComponentsModule} from './components/components.module'
import {PipesModule} from './pipes/pipes.module'
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';

//servicios
import { PaisService } from './services/services/pais.service';
import { DatosvictimaService } from './services/services/datos.service';
import { ViolacionesddhhService } from './services/services/violaciones.service';
import { CrimeneslhService } from './services/services/crimeneslh.service';
import { MapaService } from './services/services/mapa.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    PagesModule,
    SharedModule,

  ],
  providers: [
    //httpInterceptorProviders,
    PaisService,
    DatosvictimaService,
    ViolacionesddhhService,
    CrimeneslhService,
    MapaService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
