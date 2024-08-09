import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Prensa } from 'src/app/models/prensa';
import { PrensaService } from 'src/app/services/services/prensa.service';

@Component({
  selector: 'app-prensa-detail',
  templateUrl: './prensa-detail.component.html',
  styleUrls: ['./prensa-detail.component.css']
})
export class PrensaDetailComponent implements OnInit {

  prensa$: Observable<Prensa>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prensaService: PrensaService,
    private titleService: Title
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.closeMenu();
    this.getArticle();

  }

  getArticle(){
    this.prensa$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.prensaService.getPrensa(+params.get('id'))
      )
    );

    // this.titleService.setTitle('Blog Detail');
  }

  closeMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.remove("cbp-spmenu-open");
        // console.log(colorPais)

      }
  }

}
