import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BussinesSharedModule } from './bussines-shared/bussines-shared.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CacheModule } from './cache/cache.module';
import { HttpClientModule } from '@angular/common/http';
import {ConfigurationService} from "./configuration.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BussinesSharedModule,
    CatalogueModule,
    CacheModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ConfigurationService,
    {provide: APP_INITIALIZER, useFactory: (config: ConfigurationService) => () => config.load(), deps: [ConfigurationService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
