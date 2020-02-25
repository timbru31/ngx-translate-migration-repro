import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { Observable, from } from 'rxjs';

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
    BrowserModule
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
