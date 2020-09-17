import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';

import {BaseInformationEffects} from './effects/base-information.effects';

@NgModule({
  imports: [
    EffectsModule.forRoot([BaseInformationEffects]),
    StoreModule.forRoot({rootState: reducers}),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  exports: [StoreModule],
  providers: [BaseInformationEffects]
})
export class AppStoreModule { }
