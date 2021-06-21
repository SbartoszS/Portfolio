import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    I18nModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
