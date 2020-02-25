import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslocoModule } from '@ngneat/transloco';

import { AppComponent } from './app.component';
import { Observable, from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

export function createTranslateLoader() {
  return new RequireTranslateLoader();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader
      }
    }),
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


export class RequireTranslateLoader extends TranslateLoader {
  getTranslation(_: string): Observable<any> {
    return from(import('../assets/i18n/en.json'));
  }
}
