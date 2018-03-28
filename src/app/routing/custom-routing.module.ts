import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { RoutingEnum } from '../model/enum/RoutingEnum';


const heroesRoutes: Routes = [
  { path: RoutingEnum.Login, component: LoginComponent },
  { path: RoutingEnum.Home, component: HomeComponent },
  { path: RoutingEnum.List, component: ListComponent },
  { path: RoutingEnum.Detail, component: DetailComponent },
  { path: RoutingEnum.Edit+"/:id", component: EditComponent },
  { path: RoutingEnum.Edit, component: EditComponent },
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomRoutingModule { }
