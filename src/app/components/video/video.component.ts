import { Component, OnInit } from '@angular/core';
import{Video} from '../../models/video';
import {VideoService} from '../../services/services/video.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: Video;
  error: string;

  constructor(
    public videoService: VideoService,
    private _sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.getSliders();
  }

  getSliders(){
    this.videoService.getVideos().subscribe(
      (data: Video) => this.videos = data,
      error => this.error = error
      );
      console.log(this.videos)
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
