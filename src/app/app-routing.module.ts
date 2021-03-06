import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './common/p404/p404.component';
import { LoginComponent } from './common/login/login.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'products',
        loadChildren: './modules/items/items.module#ItemsModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
