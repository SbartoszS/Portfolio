import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="title-box">
           <h1 class="title-box__title">Bartosz Stojek</h1>
           <h2 class="title-box__subtitle">Front-End Developer</h2>
           <p class="title-box__text">{{'text' | translate}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
