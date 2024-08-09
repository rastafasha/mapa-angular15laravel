import { Component, OnInit } from '@angular/core';
import { PrensaService } from '../../../services/services/prensa.service';
import { Prensa } from '../../../models/prensa';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  blogs: Prensa;
  error: {};

  constructor(private blogpostService: PrensaService) { }

  ngOnInit() {
    this.blogpostService.getRecentPrensas().subscribe(
      (data: Prensa) => this.blogs = data,
      error => this.error = error
    );
  }

}
