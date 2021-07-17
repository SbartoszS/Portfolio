import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-video',
  template: `
    <video id="myVideo" [muted]="true" autoplay loop>
      <source src="./assets/Space.mp4" type="video/mp4" class="this">
    </video>
  `,
  styles: [
    `#myVideo {
      position: fixed;
      left: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      z-index: -1;
    }`
  ]
})
export class HomeVideoComponent {

}
