import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BussinesSharedModule } from './bussines-shared/bussines-shared.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CacheModule } from './cache/cache.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FirstStepModule } from './components/first-step/first-step.module';
import { SharedModule } from './shared/shared.module';
import { SecondStepModule } from './components/second-step/second-step.module';
import { BreadCrumbModule } from './shared/components/bread-crumb/bread-crumb.module';
import { SteperModule } from './shared/components/steper/steper.module';
import { AppStoreModule } from './store/app-store.module';
import { ThirdStepModule } from './components/third-step/third-step.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BussinesSharedModule,
    CatalogueModule,
    CacheModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    FirstStepModule,
    SecondStepModule,
    ThirdStepModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppStoreModule,
    BreadCrumbModule,
    SteperModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigurationService) => () => config.load(),
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
