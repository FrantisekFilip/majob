import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/product-select',
    pathMatch: 'full',
  },
  {
    path: 'product-select',
    loadChildren: () => import('./components/product-select/product-select.module').then(m => m.ProductSelectModule)
  },
  {
    path: 'second-step',
    loadChildren: () => import('./components/second-step/second-step.module').then(m => m.SecondStepModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
