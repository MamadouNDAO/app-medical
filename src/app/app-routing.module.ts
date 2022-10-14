import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListeCabinetComponent } from './pages/liste-cabinet/liste-cabinet.component';
import { DetailCabinetComponent } from './pages/detail-cabinet/detail-cabinet.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path: 'acceuil', component: HomeComponent},
  {path: 'cabinets/list', component:ListeCabinetComponent},
  {path: 'cabinets/:id', component: DetailCabinetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
