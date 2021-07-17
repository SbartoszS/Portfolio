import { Component } from '@angular/core';

@Component({
  selector: 'app-home-title',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="title-box">
           <h1 class="title-box-title">Bartosz Stojek</h1>
           <h2 class="title-box-subtitle">Front-End Developer</h2>
           <p class="title-box-text">{{'text' | translate}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [

    `.space {
      height: 150px;
   }
  
  .title-box {
      color: white;
      text-align: center;
      margin-top: 50px;
      height: 60vh;
  }
  .title-box-title {
          font-size: 36px;
      }
  
  .title-box-subtitle {
          font-size: 28px;
      }
  
  .title-box-text {
          padding: 10px;
      }
  }`
  ]
})
export class HomeTitleComponent {
}
