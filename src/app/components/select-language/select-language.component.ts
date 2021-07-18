import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
  <div class="container-fluid">
    <div class="row">
        <div class="col-8"></div>
        <div class="col-4">
            <div class="buttons-container">
                <button class="buttons-container-pl" [class.active]="this.translate.currentLang==='pl'? isActive : !isActive" (click)="useLanguage('pl')">PL</button>
                <button class="buttons-container-en" [class.active]="this.translate.currentLang==='en'? isActive : !isActive" (click)="useLanguage('en')">EN</button>
            </div>
        </div>
    </div>
</div>
  `,
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent {

  public isActive: boolean = true;

  constructor(public translate: TranslateService) { }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}


