import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Request } from 'express';
import { TranslateCacheModule, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';

import { translateLoaderFactory } from './translate-loaders';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient, PLATFORM_ID]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie'
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService,
    @Optional() @Inject(REQUEST) private req: Request,
    @Inject(PLATFORM_ID) private platform: any
  ) {
    if (isPlatformBrowser(this.platform)) {
      translateCacheService.init();
    }

    translate.addLangs(['en', 'pl']);

    const browserLang = isPlatformBrowser(this.platform)
      ? translateCacheService.getCachedLanguage() || translate.getBrowserLang() || 'pl'
      : this.getLangFromServerSideCookie() || 'pl';

    translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
  }

  getLangFromServerSideCookie() {
    if (this.req) {
      return this.req.cookies.lang;
    }
  }
}

export function translateCacheFactory(translateService: TranslateService, translateCacheSettings: TranslateCacheSettings) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}
