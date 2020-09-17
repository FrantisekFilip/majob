import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BussinesSharedModule } from './bussines-shared/bussines-shared.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CacheModule } from './cache/cache.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {FormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store';
import {FirstStepModule} from './components/first-step/first-step.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from './shared/shared.module';
import { SecondStepComponent } from './components/second-step/second-step.component';
import {SecondStepModule} from "./components/second-step/second-step.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment.prod";
import {reducers} from "./store/reducers";
import {BreadCrumbModule} from "./shared/components/bread-crumb/bread-crumb.module";
import {SteperModule} from "./shared/components/steper/steper.module";
import {AppStoreModule} from "./store/app-store.module";
import {ThirdStepComponent} from "./components/third-step/third-step.component";
import {ThirdStepModule} from "./components/third-step/third-step.module";

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
    //loads configuration before starting app
    {provide: APP_INITIALIZER, useFactory: (config: ConfigurationService) => () => config.load(), deps: [ConfigurationService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
