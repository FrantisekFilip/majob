import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first-step',
    pathMatch: 'full',
  },
  {
    path: 'first-step',
    loadChildren: () => import('./components/first-step/first-step.module').then(m => m.FirstStepModule)
  },
  {
    path: 'second-step',
    loadChildren: () => import('./components/second-step/second-step.module').then(m => m.SecondStepModule)
  },
  {
    path: 'third-step',
    loadChildren: () => import('./components/third-step/third-step.module').then(m => m.ThirdStepModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
