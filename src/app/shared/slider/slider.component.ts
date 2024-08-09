import { Component, OnInit } from '@angular/core';
import{Slider} from '../../models/slider';
import {SliderService} from '../../services/services/slider.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders: Slider;
  error: string;

  constructor(
    public sliderService: SliderService,
    private _sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.getSliders();
  }

  getSliders(){
    this.sliderService.getSliders().subscribe(
      (data: Slider) => this.sliders = data,
      error => this.error = error
      );
      console.log(this.sliders);
  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
