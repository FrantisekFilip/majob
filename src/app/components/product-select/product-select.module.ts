import { NgModule } from '@angular/core';
import {ProductSelectComponent} from './product-select.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {ProductSelectRoutingModule} from './product-select-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, MatIconModule, ProductSelectRoutingModule],
  declarations: [ProductSelectComponent],
  exports: [ProductSelectComponent]
})
export class ProductSelectModule {}
