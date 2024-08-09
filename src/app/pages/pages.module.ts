import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrensaIndexComponent } from './prensa/prensa-index/prensa-index.component';
import { PrensaDetailComponent } from './prensa/prensa-detail/prensa-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';
import { BlogpostRecentComponent } from './prensa/blogpost-recent/blogpost-recent.component';



@NgModule({
  declarations: [
    PrensaIndexComponent,
     PrensaDetailComponent,
    HomeComponent,
    BlogpostRecentComponent
    ],
  exports: [
    PrensaIndexComponent,
     PrensaDetailComponent,
    HomeComponent,
    BlogpostRecentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    NgxPaginationModule,
    PipesModule
  ]
})
export class PagesModule { }
